"""
NEPOOL Tracker Health Check -- scripts/check_health.py

Fails (exit 1) when the tracker is going stale, so the daily CI workflow
fails and GitHub emails the repo owner. Motivated by the April-July 2026
incident where scraping kept succeeding but the site silently froze because
no new meetings were being created.

Checks:
  1. Scraped materials exist and are fresh (scraped within the last 5 days --
     tolerant of weekends and a single missed weekday run).
  2. meetings.js is parseable and its newest meeting is recent or in the
     future (within 21 days back). A longer gap means meeting discovery has
     stopped keeping up with the scrape data.

Run manually any time:  python scripts/check_health.py
"""
import sys
from datetime import date, datetime, timedelta, timezone

from scrape_agendas import load_meetings_data, load_scraped_data

STALE_SCRAPE_DAYS = 5
STALE_MEETING_DAYS = 21

failures = []


def check(ok, label, detail):
    status = "PASS" if ok else "FAIL"
    print(f"[health] {status}  {label}: {detail}")
    if not ok:
        failures.append(label)


def main():
    today = date.today()

    # -- 1. Scraped materials freshness --
    try:
        scraped = load_scraped_data()
    except Exception as e:
        check(False, "scraped materials", f"could not load: {e}")
        scraped = None

    if scraped:
        doc_count = sum(
            len(docs)
            for cdata in scraped.get("committees", {}).values()
            for docs in cdata.get("meetings", {}).values()
        )
        check(doc_count > 0, "scraped documents", f"{doc_count} documents")

        scraped_at_raw = scraped.get("scraped_at", "")
        try:
            scraped_at = datetime.fromisoformat(scraped_at_raw.replace("Z", "+00:00"))
            age = datetime.now(timezone.utc) - scraped_at
            check(age <= timedelta(days=STALE_SCRAPE_DAYS), "scrape freshness",
                  f"last scrape {scraped_at_raw} ({age.days} day(s) ago)")
        except ValueError:
            check(False, "scrape freshness", f"unparseable scraped_at: {scraped_at_raw!r}")

    # -- 2. Meetings recency --
    try:
        meetings_data = load_meetings_data()
    except Exception as e:
        check(False, "meetings.js", f"could not parse: {e}")
        meetings_data = None

    if meetings_data:
        newest = None
        for committee in meetings_data.get("committees", []):
            for meeting in committee.get("meetings", []):
                d = meeting.get("date_end") or meeting.get("date", "")
                try:
                    dd = date.fromisoformat(d)
                except ValueError:
                    continue
                if newest is None or dd > newest:
                    newest = dd
        if newest is None:
            check(False, "meeting recency", "no meetings with valid dates found")
        else:
            gap = (today - newest).days
            check(gap <= STALE_MEETING_DAYS, "meeting recency",
                  f"newest meeting {newest.isoformat()} "
                  f"({gap} day(s) ago)" if gap > 0 else f"newest meeting {newest.isoformat()} (upcoming)")

    if failures:
        print(f"[health] UNHEALTHY: {len(failures)} check(s) failed: {', '.join(failures)}")
        return 1
    print("[health] All checks passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
