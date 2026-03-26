"""
validate_meetings.py — Sanity-check data/meetings.js before committing.

Checks for:
  - Duplicate agenda item times within a single meeting
  - date_end earlier than date
  - Upcoming meetings missing iso_ne_url
  - Agenda items missing required fields (order, title, type)
  - Meetings missing required fields (id, date)

Exit 0 = clean. Exit 1 = issues found (blocks commit when used as pre-commit hook).
"""
import json
import re
import sys
from datetime import date, datetime
from pathlib import Path

MEETINGS_FILE = Path("data/meetings.js")
VALID_TYPES   = {"presentation", "vote", "informational", "procedural"}
VALID_REL     = {"high", "medium", "low", ""}
today         = date.today()

errors   = []   # block commit
warnings = []   # advisory only


def err(msg):  errors.append(f"  ERROR   {msg}")
def warn(msg): warnings.append(f"  WARNING {msg}")


def load_meetings():
    raw = MEETINGS_FILE.read_text(encoding="utf-8")

    # Strip whole-line // comments (safe: doesn't touch URLs in strings)
    raw = re.sub(r'(?m)^\s*//[^\n]*\n?', '', raw)

    # Find and extract the object literal after the assignment
    m = re.search(r'window\.\w+\s*=\s*', raw)
    if not m:
        raise json.JSONDecodeError("window.MEETINGS_DATA = not found", raw, 0)
    raw = raw[m.end():].rstrip().rstrip(';').rstrip()

    # Quote unquoted keys: identifiers at start of line followed by colon
    # Using multiline so ^ matches each line; safe because line-start identifiers
    # in a JS object literal are always keys, never string values.
    raw = re.sub(r'(?m)^(\s*)([a-zA-Z_$][a-zA-Z0-9_$]*)(\s*):', r'\1"\2"\3:', raw)

    # Remove trailing commas before } or ]
    raw = re.sub(r',(\s*[}\]])', r'\1', raw)

    return json.loads(raw)


def check_date(date_str, label):
    try:
        return datetime.strptime(date_str, "%Y-%m-%d").date()
    except (ValueError, TypeError):
        err(f"{label}: invalid date format '{date_str}'")
        return None


def check_meeting(committee_id, meeting):
    mid = meeting.get("id", "?")
    label = f"{committee_id}/{mid}"

    # Required fields
    if not meeting.get("id"):
        err(f"{label}: missing 'id'")
    if not meeting.get("date"):
        err(f"{label}: missing 'date'")
        return

    meeting_date = check_date(meeting["date"], label)
    if not meeting_date:
        return

    # date_end must be >= date
    date_end_str = meeting.get("date_end")
    if date_end_str:
        date_end = check_date(date_end_str, f"{label} date_end")
        if date_end and date_end < meeting_date:
            err(f"{label}: date_end {date_end_str} is before date {meeting['date']}")

    # Upcoming meetings should have iso_ne_url
    if meeting_date >= today and not meeting.get("iso_ne_url"):
        warn(f"{label} ({meeting['date']}): upcoming meeting has no iso_ne_url")

    # Agenda items
    items = meeting.get("agenda_items", [])
    seen_times   = {}   # time -> first order that used it
    seen_orders  = {}   # order -> first title that used it

    for item in items:
        iorder = item.get("order", "?")
        ilabel = f"{label} item {iorder}"

        # Required item fields
        if not item.get("title"):
            err(f"{ilabel}: missing title")
        if item.get("order") is None:
            err(f"{ilabel}: missing order")
        if item.get("type") not in VALID_TYPES:
            err(f"{ilabel}: invalid type '{item.get('type')}'")

        # Maine relevance value
        if item.get("maine_relevance", "") not in VALID_REL:
            err(f"{ilabel}: invalid maine_relevance '{item.get('maine_relevance')}'")

        # Duplicate order numbers
        o = item.get("order")
        if o is not None:
            if o in seen_orders:
                err(f"{label}: duplicate agenda order {o} ('{item.get('title')}' and '{seen_orders[o]}')")
            else:
                seen_orders[o] = item.get("title", "")

        # Duplicate times
        t = item.get("time", "").strip()
        if t:
            if t in seen_times:
                err(f"{label}: duplicate time '{t}' on items {seen_times[t]} and {iorder} — "
                    f"'{items[seen_times[t]-1].get('title', '')}' / '{item.get('title', '')}'")
            else:
                seen_times[t] = iorder


def main():
    if not MEETINGS_FILE.exists():
        print(f"ERROR: {MEETINGS_FILE} not found.")
        sys.exit(1)

    try:
        data = load_meetings()
    except json.JSONDecodeError as e:
        print(f"ERROR: Could not parse {MEETINGS_FILE}: {e}")
        sys.exit(1)

    committees = data.get("committees", [])
    meeting_ids = {}

    for committee in committees:
        cid = committee.get("id", "?")
        for meeting in committee.get("meetings", []):
            mid = meeting.get("id")
            if mid:
                if mid in meeting_ids:
                    err(f"Duplicate meeting id '{mid}' in {cid} and {meeting_ids[mid]}")
                else:
                    meeting_ids[mid] = cid
            check_meeting(cid, meeting)

    # Report
    total_meetings = sum(len(c.get("meetings", [])) for c in committees)
    total_items    = sum(
        len(m.get("agenda_items", []))
        for c in committees for m in c.get("meetings", [])
    )
    print(f"validate_meetings.py — {total_meetings} meetings, {total_items} agenda items checked")

    if warnings:
        print(f"\n{len(warnings)} warning(s):")
        for w in warnings:
            print(w)

    if errors:
        print(f"\n{len(errors)} error(s):")
        for e in errors:
            print(e)
        print("\nFix the errors above before committing.")
        sys.exit(1)
    else:
        print("All checks passed.")
        sys.exit(0)


if __name__ == "__main__":
    main()
