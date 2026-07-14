"""
NEPOOL Meeting Discovery -- scripts/discover_meetings.py

Creates placeholder meeting entries in data/meetings.js for any meeting date
that appears in scraped materials but is missing from meetings.js.

This is the piece that keeps the tracker alive over time: scrape_agendas.py
can only fill in agendas for meetings that already exist, and meetings used
to be added by hand. When the hand-curated entries ran out (April 2026), the
site froze even though scraping kept working. This script closes that loop:

    scrape_materials.py  ->  discover_meetings.py  ->  scrape_agendas.py
    (finds documents)        (creates meetings)        (fills in agendas)

ISO-NE posts meeting materials days-to-weeks before each meeting, so new
meetings appear here as soon as their first document is posted.

Usage:
    python scripts/discover_meetings.py                # discover last 90 days + future
    python scripts/discover_meetings.py --days-back 30 # narrower window

Exits 0 even when nothing is discovered; exits 1 only on hard errors
(unparseable meetings.js, missing scraped data) so CI can flag real breakage.
"""
import argparse
import re
import sys
from datetime import date, timedelta

# Shared helpers live in scrape_agendas.py -- both scripts read/patch the same
# files and must stay in agreement about formats.
from scrape_agendas import (
    MEETINGS_FILE,
    load_meetings_data,
    load_scraped_data,
    validate_meetings_js,
)

today = date.today()


def log(msg):
    print(f"[discover] {msg}")


# -- What meetings.js already covers ------------------------------------------

def covered_dates_by_committee(meetings_data):
    """
    Map committee id -> set of ISO date strings already covered by an existing
    meeting entry. Multi-day meetings (date..date_end) cover every day in
    their range, so a scraped doc filed under any day of the range does not
    trigger a duplicate meeting.
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


# -- Multi-day detection from document titles ----------------------------------

def detect_date_end(meeting_date, docs):
    """
    ISO-NE document titles begin with the meeting's date range when the
    meeting spans multiple days, e.g. "2026-07-07-09 MC A03g - ...".
    If any doc title carries an end day, return the end date; else None.
    Cross-month ranges are rare and ambiguous in this naming scheme, so only
    same-month ranges are detected.
    """
    pat = re.compile(r"^" + re.escape(meeting_date) + r"-(\d{2})\b")
    start = date.fromisoformat(meeting_date)
    for doc in docs:
        m = pat.match(doc.get("title", ""))
        if not m:
            continue
        end_day = int(m.group(1))
        if end_day > start.day:
            try:
                return start.replace(day=end_day).isoformat()
            except ValueError:
                return None
    return None


# -- Finding what's missing -----------------------------------------------------

def find_new_meetings(meetings_data, scraped, days_back):
    """
    Return list of dicts {cid, date, date_end} for scraped meeting dates that
    meetings.js does not cover. Ignores dates older than the days_back window
    so ancient history doesn't flood the site on first run.
    """
    floor = today - timedelta(days=days_back)
    covered = covered_dates_by_committee(meetings_data)
    known_committees = set(covered)
    discovered = []

    for cid, cdata in scraped.get("committees", {}).items():
        if cid not in known_committees:
            log(f"Skipping unknown committee '{cid}' (not in meetings.js)")
            continue
        for meeting_date, docs in sorted(cdata.get("meetings", {}).items()):
            try:
                start = date.fromisoformat(meeting_date)
            except ValueError:
                continue
            if start < floor:
                continue
            date_end = detect_date_end(meeting_date, docs)
            # Skip if any day of the range is already covered by an entry
            span = [meeting_date]
            if date_end:
                cur = start
                last = date.fromisoformat(date_end)
                while cur <= last:
                    span.append(cur.isoformat())
                    cur += timedelta(days=1)
            if any(d in covered[cid] for d in span):
                continue
            discovered.append({"cid": cid, "date": meeting_date, "date_end": date_end})
    return discovered


# -- meetings.js patching --------------------------------------------------------

PLACEHOLDER_TITLE = "Agenda pending — check back closer to the meeting date."


def build_meeting_js(cid, meeting_date, date_end):
    """
    Format a placeholder meeting entry exactly like the hand-authored ones:
    8-space brace indent, 10-space fields. The single agenda item carries no
    agenda_number, which is what marks it as a placeholder for
    scrape_agendas.py to replace once ISO-NE posts the real agenda.
    """
    mid = f"{cid}-{meeting_date}"
    if date_end:
        mid += f"-{date_end[-2:]}"
    lines = [
        "        {",
        f'          id: "{mid}",',
        f'          date: "{meeting_date}",',
    ]
    if date_end:
        lines.append(f'          date_end: "{date_end}",')
    lines += [
        '          iso_ne_url: "",',
        '          location: "",',
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
    parser = argparse.ArgumentParser(description="Discover meetings from scraped materials")
    parser.add_argument("--days-back", type=int, default=90,
                        help="ignore scraped meeting dates older than this many days (default 90)")
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

    new_meetings = find_new_meetings(meetings_data, scraped, args.days_back)
    if not new_meetings:
        log("No new meetings found. meetings.js already covers all scraped dates.")
        return 0

    log(f"Discovered {len(new_meetings)} new meeting(s):")
    for nm in new_meetings:
        span = nm["date"] + (f"..{nm['date_end']}" if nm["date_end"] else "")
        log(f"  {nm['cid'].upper():5s} {span}")

    original = MEETINGS_FILE.read_text(encoding="utf-8")
    patched = original
    for nm in new_meetings:
        block = build_meeting_js(nm["cid"], nm["date"], nm["date_end"])
        result = insert_meeting(patched, nm["cid"], block)
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
