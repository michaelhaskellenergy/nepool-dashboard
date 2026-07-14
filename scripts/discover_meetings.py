"""
NEPOOL Meeting Discovery -- scripts/discover_meetings.py

Creates placeholder meeting entries in data/meetings.js so the rest of the
pipeline (agenda parsing, summaries, the calendar UI) has meetings to hang
data on. Two sources, in order of authority:

1. The ISO-NE events API (the data behind iso-ne.com/calendar) -- the
   authoritative schedule of upcoming meetings, discovered weeks ahead,
   complete with event-details URL and location.

2. Scraped materials (backfill only) -- committee pages group documents by
   meeting date, so past meetings can be reconstructed from them. Documents
   are attributed by the committee code in their title ("2026-06-25 RC A01.1
   ..."), NOT by which page they appeared on: ISO-NE cross-posts joint items
   (e.g. MC docs on the RC page), which previously created phantom meetings.

This script is what keeps the tracker alive over time: scrape_agendas.py can
only fill in agendas for meetings that already exist, and when hand-curated
entries ran out in April 2026 the site froze even though scraping kept
working.

Usage:
    python scripts/discover_meetings.py                  # 60 days ahead, 90 back
    python scripts/discover_meetings.py --days-ahead 30 --days-back 30

Exits 0 even when nothing is discovered; exits 1 only on hard errors so CI
can flag real breakage. A calendar API outage is logged but not fatal --
materials-based discovery still runs.
"""
import argparse
import json
import re
import sys
import urllib.request
from datetime import date, timedelta

# Shared helpers live in scrape_agendas.py -- both scripts read/patch the same
# files and must stay in agreement about formats.
from scrape_agendas import (
    MEETINGS_FILE,
    js_str,
    load_meetings_data,
    load_scraped_data,
    validate_meetings_js,
)

EVENTS_API = "https://www.iso-ne.com/api/1/services/events.json"
USER_AGENT = "Mozilla/5.0 (compatible; NEPOOL-Tracker/1.0)"

today = date.today()


def log(msg):
    print(f"[discover] {msg}")


# -- What meetings.js already covers ------------------------------------------

def covered_dates_by_committee(meetings_data):
    """
    Map committee id -> set of ISO date strings already covered by an existing
    meeting entry. Multi-day meetings (date..date_end) cover every day in
    their range, so a joint or cross-posted document filed under any day of
    the range does not trigger a duplicate meeting.
    """
    covered = {}
    for committee in meetings_data.get("committees", []):
        days = set()
        for meeting in committee.get("meetings", []):
            try:
                start = date.fromisoformat(meeting.get("date", ""))
                end = date.fromisoformat(meeting.get("date_end") or meeting["date"])
            except ValueError:
                continue
            cur = start
            while cur <= end:
                days.add(cur.isoformat())
                cur += timedelta(days=1)
        covered[committee.get("id", "")] = days
    return covered


def span_days(start_iso, end_iso):
    """List of ISO date strings from start to end inclusive."""
    cur = date.fromisoformat(start_iso)
    last = date.fromisoformat(end_iso or start_iso)
    out = []
    while cur <= last:
        out.append(cur.isoformat())
        cur += timedelta(days=1)
    return out


# -- Source 1: ISO-NE events API (future meetings) -------------------------------

def classify_event(title):
    """
    Map an ISO-NE calendar event title to the committee id(s) it belongs to.
    Joint meetings ("Reliability & Transmission Committee") map to both.
    Returns [] for events we don't track (subcommittees, market notices...).
    """
    t = title.lower()
    if t.startswith("cancelled"):
        return []
    ids = []
    if "participants committee" in t:
        ids.append("pc")
    if "markets committee" in t:
        ids.append("mc")
    if "reliability" in t and "committee" in t:
        ids.append("rc")
    if "transmission" in t and "committee" in t:
        ids.append("tc")
    if "planning advisory committee" in t:
        ids.append("pac")
    if "load forecast" in t:
        ids.append("lfwg")
    if "distributed generation" in t:
        ids.append("dgwg")
    return ids


def fetch_calendar_events(days_ahead):
    """Fetch raw events from the ISO-NE calendar API. Returns [] on failure."""
    frm = today.isoformat()
    to = (today + timedelta(days=days_ahead)).isoformat()
    url = (f"{EVENTS_API}?sortBy=event_start_date_gmt+asc"
           f"&fromDate={frm}T00:00:00&toDate={to}T23:59:59&count=1000")
    try:
        req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode("utf-8")).get("events", [])
    except Exception as e:
        log(f"WARNING: calendar API unavailable ({e}) -- future meetings skipped this run.")
        return []


def meetings_from_calendar(events, known_committees):
    """
    Turn calendar events into meeting candidates:
    {cid, date, date_end, iso_ne_url, location}.
    ISO-NE lists each day of a multi-day meeting as its own event (e.g. MC
    Aug 11, 12, 13), so consecutive same-committee days are merged into one
    meeting with a date range, matching the tracker's convention.
    """
    per_committee = {}  # cid -> {iso_date: event}
    for ev in events:
        if ev.get("cancelled_flag") == "Y" or ev.get("deleted_flag") == "Y":
            continue
        title = ev.get("event_title") or ""
        start = (ev.get("event_start_date_gmt_str") or "")[:10]
        if not start:
            continue
        for cid in classify_event(title):
            if cid not in known_committees:
                continue
            days = per_committee.setdefault(cid, {})
            for d in span_days(start, (ev.get("event_end_date_gmt_str") or "")[:10] or start):
                days.setdefault(d, ev)

    candidates = []
    for cid, days in per_committee.items():
        run = []  # consecutive dates forming one meeting
        for d in sorted(days) + [None]:  # sentinel flushes the last run
            if run and (d is None or
                        (date.fromisoformat(d) - date.fromisoformat(run[-1])).days != 1):
                first_ev = days[run[0]]
                candidates.append({
                    "cid": cid,
                    "date": run[0],
                    "date_end": run[-1] if len(run) > 1 else None,
                    "iso_ne_url": (f"https://www.iso-ne.com/event-details?eventId={first_ev['event_id']}"
                                   if first_ev.get("event_id") else ""),
                    "location": first_ev.get("location") or "",
                })
                run = []
            if d is not None:
                run.append(d)
    return candidates


# -- Source 2: scraped materials (backfill) ---------------------------------------

# "2026-07-07-09 MC A03 - ..." / "2026-06-09-11 Joint MC/RC Meeting Minutes"
TITLE_PREFIX_RE = re.compile(
    r"^(\d{4}-\d{2}-\d{2})(?:-(\d{2}))?\s+(?:Joint\s+)?([A-Za-z&/]+)\b")


def doc_committees(title):
    """Committee abbreviations named in a document title, e.g. {"MC", "RC"}."""
    m = TITLE_PREFIX_RE.match(title)
    if not m:
        return set()
    return {t.strip().upper() for t in re.split(r"[/&]", m.group(3)) if t.strip()}


def detect_date_end(meeting_date, docs, abbr):
    """
    End date of a multi-day meeting, from this committee's own document
    titles ("2026-07-07-09 MC ..."). Cross-month ranges are ambiguous in
    this naming scheme, so only same-month ranges are detected.
    """
    start = date.fromisoformat(meeting_date)
    for doc in docs:
        title = doc.get("title", "")
        if abbr not in doc_committees(title):
            continue
        m = TITLE_PREFIX_RE.match(title)
        if not m or m.group(1) != meeting_date or not m.group(2):
            continue
        end_day = int(m.group(2))
        if end_day > start.day:
            try:
                return start.replace(day=end_day).isoformat()
            except ValueError:
                return None
    return None


def meetings_from_materials(scraped, abbr_by_cid, days_back):
    """
    Meeting candidates reconstructed from scraped documents, for the backfill
    window only. A date counts as committee X's meeting only if at least one
    document title names X -- documents cross-posted from other committees'
    meetings (joint items) don't count.
    """
    floor = today - timedelta(days=days_back)
    candidates = []
    for cid, cdata in scraped.get("committees", {}).items():
        abbr = abbr_by_cid.get(cid)
        if not abbr:
            log(f"Skipping unknown committee '{cid}' (not in meetings.js)")
            continue
        for meeting_date, docs in sorted(cdata.get("meetings", {}).items()):
            try:
                start = date.fromisoformat(meeting_date)
            except ValueError:
                continue
            if start < floor:
                continue
            if not any(abbr in doc_committees(doc.get("title", "")) for doc in docs):
                continue
            candidates.append({
                "cid": cid,
                "date": meeting_date,
                "date_end": detect_date_end(meeting_date, docs, abbr),
                "iso_ne_url": "",
                "location": "",
            })
    return candidates


# -- meetings.js patching --------------------------------------------------------

PLACEHOLDER_TITLE = "Agenda pending — check back closer to the meeting date."


def build_meeting_js(nm):
    """
    Format a placeholder meeting entry exactly like the hand-authored ones:
    8-space brace indent, 10-space fields. The single agenda item carries no
    agenda_number, which is what marks it as a placeholder for
    scrape_agendas.py to replace once ISO-NE posts the real agenda.
    """
    mid = f"{nm['cid']}-{nm['date']}"
    if nm["date_end"]:
        mid += f"-{nm['date_end'][-2:]}"
    lines = [
        "        {",
        f'          id: "{mid}",',
        f'          date: "{nm["date"]}",',
    ]
    if nm["date_end"]:
        lines.append(f'          date_end: "{nm["date_end"]}",')
    lines += [
        f'          iso_ne_url: {js_str(nm["iso_ne_url"])},',
        f'          location: {js_str(nm["location"])},',
        "          agenda_items: [",
        "            {",
        "              order: 1,",
        f'              title: "{PLACEHOLDER_TITLE}",',
        '              type: "presentation",',
        "              materials: [],",
        '              summary: "",',
        '              maine_relevance: "",',
        "              topic_tags: []",
        "            }",
        "          ]",
        "        },",
    ]
    return "\n".join(lines)


def insert_meeting(text, cid, meeting_js):
    """
    Insert a meeting block at the top of the committee's meetings array
    (entries are kept newest-first, matching the hand-authored file).
    Returns patched text, or None if the committee block can't be located.
    """
    cid_pat = re.compile(r'\bid\s*:\s*["\']' + re.escape(cid) + r'["\']')
    cid_match = cid_pat.search(text)
    if not cid_match:
        log(f"Committee id '{cid}' not found in meetings.js")
        return None

    arr_pat = re.compile(r"\bmeetings\s*:\s*\[")
    arr_match = arr_pat.search(text, cid_match.end())
    if not arr_match:
        log(f"meetings array not found after committee '{cid}'")
        return None

    pos = arr_match.end()
    return text[:pos] + "\n" + meeting_js + text[pos:]


# -- Main -------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Discover meetings from the ISO-NE calendar and scraped materials")
    parser.add_argument("--days-ahead", type=int, default=60,
                        help="calendar lookahead for scheduled meetings (default 60)")
    parser.add_argument("--days-back", type=int, default=90,
                        help="materials backfill window (default 90)")
    args = parser.parse_args()

    log("Starting meeting discovery...")

    try:
        meetings_data = load_meetings_data()
    except Exception as e:
        log(f"ERROR: Could not parse meetings.js: {e}")
        return 1

    try:
        scraped = load_scraped_data()
    except FileNotFoundError as e:
        log(f"ERROR: {e}")
        return 1

    abbr_by_cid = {c["id"]: c.get("abbr", c["id"].upper())
                   for c in meetings_data.get("committees", [])}
    covered = covered_dates_by_committee(meetings_data)

    events = fetch_calendar_events(args.days_ahead)
    log(f"Calendar API: {len(events)} events in the next {args.days_ahead} days.")
    candidates = meetings_from_calendar(events, set(abbr_by_cid))
    candidates += meetings_from_materials(scraped, abbr_by_cid, args.days_back)

    # Keep candidates whose date range doesn't touch anything already known,
    # claiming days as we accept them so the two sources can't double-add.
    new_meetings = []
    for nm in candidates:
        days = span_days(nm["date"], nm["date_end"])
        if any(d in covered[nm["cid"]] for d in days):
            continue
        covered[nm["cid"]].update(days)
        new_meetings.append(nm)

    if not new_meetings:
        log("No new meetings found. meetings.js already covers all known dates.")
        return 0

    log(f"Discovered {len(new_meetings)} new meeting(s):")
    for nm in sorted(new_meetings, key=lambda m: (m["cid"], m["date"])):
        span = nm["date"] + (f"..{nm['date_end']}" if nm["date_end"] else "")
        src = "calendar" if nm["iso_ne_url"] else "materials"
        log(f"  {nm['cid'].upper():5s} {span}  ({src})")

    original = MEETINGS_FILE.read_text(encoding="utf-8")
    patched = original
    for nm in new_meetings:
        result = insert_meeting(patched, nm["cid"], build_meeting_js(nm))
        if result is None:
            log(f"ERROR: could not insert {nm['cid']} {nm['date']} -- aborting all changes.")
            return 1
        patched = result

    MEETINGS_FILE.write_text(patched, encoding="utf-8")

    if not validate_meetings_js():
        log("Reverting meetings.js (validator failed after inserts).")
        MEETINGS_FILE.write_text(original, encoding="utf-8")
        return 1

    log(f"meetings.js updated: {len(new_meetings)} placeholder meeting(s) added.")
    log("scrape_agendas.py will fill in agendas as ISO-NE posts them.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
