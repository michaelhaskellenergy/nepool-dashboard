"""
NEPOOL Agenda Scraper -- scripts/scrape_agendas.py

Detects when ISO-NE posts a new agenda PDF for upcoming meetings, parses the
agenda with Claude API, and updates data/meetings.js with real agenda items.

Runs automatically as part of the daily check_and_scrape.ps1 job (step 2).
Always exits 0 -- errors are logged but do not block other pipeline steps.
"""
import anthropic
import json
import os
import re
import shutil
import subprocess
import sys
import urllib.request
from datetime import date
from pathlib import Path

MEETINGS_FILE    = Path("data/meetings.js")
SCRAPED_FILE     = Path("data/scraped_materials.json")
PDF_CACHE_DIR    = Path("data/pdfs")
VALIDATOR_SCRIPT = Path("scripts/validate_meetings.py")

MAX_AGENDA_CHARS = 8_000
today = date.today()


# ── Logging ───────────────────────────────────────────────────────────────────

def log(msg):
    print(f"[agenda] {msg}")


# ── meetings.js parsing ───────────────────────────────────────────────────────

def load_meetings_data():
    """
    Parse data/meetings.js into Python. Mirrors validate_meetings.py approach.
    Returns the full data dict: { committees: [...] }
    """
    raw = MEETINGS_FILE.read_text(encoding="utf-8")
    raw = re.sub(r'(?m)^\s*//[^\n]*\n?', '', raw)
    m = re.search(r'window\.\w+\s*=\s*', raw)
    if not m:
        raise ValueError("window.MEETINGS_DATA = not found in meetings.js")
    raw = raw[m.end():].rstrip().rstrip(';').rstrip()
    raw = re.sub(r'(?m)^(\s*)([a-zA-Z_$][a-zA-Z0-9_$]*)(\s*):', r'\1"\2"\3:', raw)
    raw = re.sub(r',(\s*[}\]])', r'\1', raw)
    return json.loads(raw)


def is_placeholder(meeting):
    """True if this meeting has no agenda items with an agenda_number."""
    items = meeting.get("agenda_items", [])
    return bool(items) and not any(item.get("agenda_number") for item in items)


def find_detection_targets(data):
    """
    Return list of (committee_id, meeting) for upcoming meetings whose
    agenda is still a placeholder (no agenda_number on any item).
    """
    targets = []
    for committee in data.get("committees", []):
        cid = committee.get("id", "")
        for meeting in committee.get("meetings", []):
            meeting_date = meeting.get("date", "")
            if not meeting_date:
                continue
            try:
                if date.fromisoformat(meeting_date) < today:
                    continue
            except ValueError:
                continue
            if is_placeholder(meeting):
                targets.append((cid, meeting))
    return targets


# ── Agenda PDF detection ──────────────────────────────────────────────────────

def find_agenda_pdf(scraped, committee_id, meeting_date):
    """
    Search scraped_materials.json for an agenda PDF for this committee+date.
    ISO-NE names agenda docs with "A00" and "Agenda" in the title.
    Returns the doc dict or None.
    """
    cdata = scraped.get("committees", {}).get(committee_id, {})
    docs = cdata.get("meetings", {}).get(meeting_date, [])
    for doc in docs:
        if doc.get("ext") != "pdf":
            continue
        title_lower = doc["title"].lower()
        if "a00" in title_lower and "agenda" in title_lower:
            return doc
    return None


# ── PDF utilities ─────────────────────────────────────────────────────────────

def find_pdftotext():
    known = Path(
        r"C:\Users\micha\AppData\Local\Microsoft\WinGet\Packages"
        r"\oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe"
        r"\poppler-25.07.0\Library\bin\pdftotext.exe"
    )
    if known.exists():
        return str(known)
    return shutil.which("pdftotext")


def safe_filename(url):
    name = url.split("/")[-1].split("?")[0]
    return re.sub(r'[<>:"|?*\\]', "_", name) or "agenda.pdf"


def download_pdf(url, dest_path):
    if dest_path.exists():
        return True
    try:
        req = urllib.request.Request(
            url, headers={"User-Agent": "Mozilla/5.0 (compatible; NEPOOL-Tracker/1.0)"}
        )
        with urllib.request.urlopen(req, timeout=30) as resp:
            dest_path.write_bytes(resp.read())
        return True
    except Exception as e:
        log(f"Download failed: {e}")
        return False


def extract_text(pdf_path, pdftotext_cmd):
    try:
        result = subprocess.run(
            [pdftotext_cmd, "-layout", str(pdf_path), "-"],
            capture_output=True, encoding="utf-8", errors="replace", timeout=30
        )
        if result.returncode == 0:
            return result.stdout.strip()
        log(f"pdftotext error (rc={result.returncode}): {result.stderr[:200]}")
        return None
    except Exception as e:
        log(f"Text extraction failed: {e}")
        return None


# ── Claude agenda parsing ─────────────────────────────────────────────────────

AGENDA_SYSTEM_PROMPT = """\
You are parsing a NEPOOL ISO-NE committee meeting agenda PDF for a structured database.
Extract all agenda items and return ONLY valid JSON -- no markdown fences, no explanation.

Use this exact structure:
{
  "agenda_items": [
    {
      "order": 1,
      "agenda_number": "A01",
      "title": "Call to Order and Approval of Agenda",
      "type": "procedural",
      "time": "9:30 AM"
    }
  ]
}

Rules:
- agenda_number: copy exactly as shown (A01, A02.1, A04.a, 7.1.a, MC/RC A02.1, etc.).
  Omit the field entirely if no item number is shown for this item.
- type: must be exactly one of: "procedural", "presentation", "vote", "informational"
  Classify based on: votes/approvals=vote, update/overview=presentation,
  minutes/housekeeping=procedural, report=informational
- time: include only if explicitly shown on the agenda for this item; otherwise omit
- order: sequential integer starting at 1
- Exclude section dividers, lunch/break lines, and lines that are not actual agenda items
- For joint committee items (e.g. MC/RC), include them in position order as they appear
- title: use the agenda wording, cleaned up (remove leading bullets, item numbers, dashes)"""


def parse_agenda_with_claude(client, committee_name, meeting_date, pdf_text):
    """
    Parse agenda PDF text into structured agenda items via Claude.
    Returns list of item dicts, or None on failure.
    """
    truncated = pdf_text[:MAX_AGENDA_CHARS]
    if len(pdf_text) > MAX_AGENDA_CHARS:
        truncated += "\n\n[... truncated ...]"

    user_msg = (
        f"Committee: {committee_name}\n"
        f"Meeting date: {meeting_date}\n\n"
        f"Agenda PDF text:\n{truncated}"
    )

    try:
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=1500,
            system=AGENDA_SYSTEM_PROMPT,
            messages=[{"role": "user", "content": user_msg}],
        )
        raw = response.content[0].text.strip()
        parsed = json.loads(raw)
        items = parsed.get("agenda_items", [])
        if not items:
            log("Claude returned empty agenda_items array.")
            return None
        return items
    except json.JSONDecodeError:
        log("Claude returned invalid JSON.")
        try:
            log(f"Raw response: {raw[:300]}")
        except NameError:
            pass
        return None
    except Exception as e:
        log(f"Claude API error: {e}")
        return None


# ── meetings.js patching ──────────────────────────────────────────────────────

def find_agenda_items_range(text, meeting_id):
    """
    Find (start, end) indices of the 'agenda_items: [...]' block for a given meeting_id.
    Returns None if not found.
    """
    id_pat = re.compile(r'\bid\s*:\s*["\']' + re.escape(meeting_id) + r'["\']')
    id_match = id_pat.search(text)
    if not id_match:
        log(f"Meeting id '{meeting_id}' not found in meetings.js")
        return None

    ai_pat = re.compile(r'\bagenda_items\s*:\s*\[')
    ai_match = ai_pat.search(text, id_match.start())
    if not ai_match:
        log(f"agenda_items not found after id '{meeting_id}'")
        return None

    # Walk forward counting brackets to find the matching ]
    depth = 0
    pos = ai_match.end() - 1  # position of opening '['
    while pos < len(text):
        if text[pos] == '[':
            depth += 1
        elif text[pos] == ']':
            depth -= 1
            if depth == 0:
                return (ai_match.start(), pos + 1)
        pos += 1

    log(f"Unmatched bracket for meeting '{meeting_id}'")
    return None


def js_str(s):
    """Format a Python string as a JS double-quoted string literal."""
    return '"' + str(s).replace('\\', '\\\\').replace('"', '\\"').replace('\n', ' ') + '"'


def format_item_js(item):
    """
    Format one agenda item as a JS object literal.
    Uses the same indentation as hand-authored entries:
      12 spaces for braces, 14 spaces for fields.
    """
    sp  = ' ' * 12   # outer braces
    sp2 = ' ' * 14   # fields

    lines = [f"{sp}{{"]
    lines.append(f"{sp2}order: {item['order']},")
    if item.get("time"):
        lines.append(f"{sp2}time: {js_str(item['time'])},")
    if item.get("agenda_number"):
        lines.append(f"{sp2}agenda_number: {js_str(item['agenda_number'])},")
    lines.append(f"{sp2}title: {js_str(item['title'])},")
    lines.append(f"{sp2}type: {js_str(item['type'])},")
    lines.append(f"{sp2}materials: [],")
    lines.append(f'{sp2}summary: "",')
    lines.append(f'{sp2}maine_relevance: "",')
    lines.append(f"{sp2}topic_tags: []")
    lines.append(f"{sp}}}")
    return '\n'.join(lines)


def build_replacement(items):
    """
    Build the full 'agenda_items: [...]' replacement string.
    10-space indent before 'agenda_items:' matches the meetings.js file format.
    """
    sp = ' ' * 10
    items_js = ',\n'.join(format_item_js(item) for item in items)
    return f"agenda_items: [\n{items_js}\n{sp}]"


def validate_meetings_js():
    """Run validate_meetings.py. Return True if exit code 0."""
    result = subprocess.run(
        [sys.executable, str(VALIDATOR_SCRIPT)],
        capture_output=True, encoding="utf-8"
    )
    if result.returncode != 0:
        log("Validator output:")
        for line in result.stdout.splitlines()[-15:]:
            log(f"  {line}")
    return result.returncode == 0


def patch_meetings_js(meeting_id, new_items):
    """
    Replace the agenda_items block for meeting_id in meetings.js.
    Reverts to original if validation fails.
    Returns True on success.
    """
    original = MEETINGS_FILE.read_text(encoding="utf-8")

    span = find_agenda_items_range(original, meeting_id)
    if span is None:
        return False

    start, end = span
    replacement = build_replacement(new_items)
    patched = original[:start] + replacement + original[end:]
    MEETINGS_FILE.write_text(patched, encoding="utf-8")

    if not validate_meetings_js():
        log(f"Reverting meetings.js (validator failed for {meeting_id})")
        MEETINGS_FILE.write_text(original, encoding="utf-8")
        return False

    return True


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    log("Starting agenda detection...")

    if not MEETINGS_FILE.exists():
        log(f"ERROR: {MEETINGS_FILE} not found.")
        return
    if not SCRAPED_FILE.exists():
        log(f"ERROR: {SCRAPED_FILE} not found. Run scrape_materials.py first.")
        return

    try:
        meetings_data = load_meetings_data()
    except Exception as e:
        log(f"ERROR: Could not parse meetings.js: {e}")
        return

    with open(SCRAPED_FILE, encoding="utf-8") as f:
        scraped = json.load(f)

    cid_to_name = {c["id"]: c["name"] for c in meetings_data.get("committees", [])}

    targets = find_detection_targets(meetings_data)
    if not targets:
        log("No upcoming meetings with placeholder agendas. Nothing to do.")
        return

    log(f"Checking {len(targets)} upcoming placeholder meeting(s): " +
        ", ".join(f"{cid}/{m['date']}" for cid, m in targets))

    pdftotext_cmd = find_pdftotext()
    if not pdftotext_cmd:
        log("ERROR: pdftotext not found. Install poppler.")
        return

    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        log("ERROR: ANTHROPIC_API_KEY not set. Cannot parse agendas.")
        return

    client = anthropic.Anthropic(api_key=api_key)
    PDF_CACHE_DIR.mkdir(parents=True, exist_ok=True)
    applied = 0

    for cid, meeting in targets:
        mid          = meeting["id"]
        meeting_date = meeting["date"]
        cname        = cid_to_name.get(cid, cid)

        log(f"Checking {cid.upper()} {meeting_date} ...")

        agenda_doc = find_agenda_pdf(scraped, cid, meeting_date)
        if not agenda_doc:
            log(f"  No agenda PDF posted yet -- will check again tomorrow.")
            continue

        log(f"  Agenda PDF found: {agenda_doc['title'][:70]}")

        pdf_dir  = PDF_CACHE_DIR / cid / meeting_date
        pdf_dir.mkdir(parents=True, exist_ok=True)
        pdf_path = pdf_dir / safe_filename(agenda_doc["url"])

        if not download_pdf(agenda_doc["url"], pdf_path):
            log("  Download failed -- skipping.")
            continue

        pdf_text = extract_text(pdf_path, pdftotext_cmd)
        if not pdf_text or len(pdf_text.strip()) < 50:
            log("  Could not extract usable text -- skipping.")
            continue

        log(f"  Extracted {len(pdf_text)} chars. Calling Claude to parse agenda...")

        items = parse_agenda_with_claude(client, cname, meeting_date, pdf_text)
        if items is None:
            log("  Agenda parse failed -- placeholder unchanged.")
            continue

        log(f"  Parsed {len(items)} items. Patching meetings.js...")

        if patch_meetings_js(mid, items):
            log(f"  SUCCESS: {cid.upper()} {meeting_date} -- {len(items)} items applied.")
            applied += 1
        else:
            log(f"  FAILED: Could not patch meetings.js for {mid}.")

    log(f"Agenda detection complete. {applied} agenda(s) applied.")


if __name__ == "__main__":
    main()
