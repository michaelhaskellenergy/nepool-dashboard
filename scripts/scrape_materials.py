"""
NEPOOL Material Scraper -- scripts/scrape_materials.py

Visits each ISO-NE committee page, extracts posted document links,
groups by meeting date, and saves to data/scraped_materials.json.

For the "new materials" notification banner, parses the posting-date
column from the on-page document table and flags only docs posted
today or yesterday (regardless of prior scrape state).

Usage:
    python scripts/scrape_materials.py                # default: 6 months back
    python scripts/scrape_materials.py --months 3     # only 3 months back
    python scripts/scrape_materials.py --months 12    # full year

Output: data/scraped_materials.json, data/new_materials.json
"""
import asyncio
import json
import re
import sys
from datetime import datetime, date, timedelta
from pathlib import Path
from playwright.async_api import async_playwright

BASE_URL = "https://www.iso-ne.com"
OUTPUT_FILE = Path("data/scraped_materials.json")
NEW_MATERIALS_FILE = Path("data/new_materials.json")

COMMITTEES = [
    {"id": "pc",   "name": "Participants Committee",               "url": f"{BASE_URL}/committees/participants/participants-committee"},
    {"id": "mc",   "name": "Markets Committee",                    "url": f"{BASE_URL}/committees/markets/markets-committee"},
    {"id": "rc",   "name": "Reliability Committee",                "url": f"{BASE_URL}/committees/reliability/reliability-committee"},
    {"id": "tc",   "name": "Transmission Committee",               "url": f"{BASE_URL}/committees/transmission/transmission-committee"},
    {"id": "pac",  "name": "Planning Advisory Committee",          "url": f"{BASE_URL}/committees/planning/planning-advisory"},
    {"id": "lfwg", "name": "Load Forecasting Working Group",       "url": f"{BASE_URL}/committees/reliability/load-forecast"},
    {"id": "dgwg", "name": "Distributed Generation Working Group", "url": f"{BASE_URL}/committees/markets/distributed-generation-working-group"},
]

DOC_EXTENSIONS = {".pdf", ".xlsx", ".xls", ".docx", ".doc", ".pptx", ".ppt", ".zip"}

# Boilerplate links present on every page -- skip these
SKIP_SUBSTRINGS = [
    "techcomm_bylaws",
    "nepool_meeting_guest_attendance",
    "car_proposal_information_summary",
    "asset_condition_reviewer_proposal_information_summary",
    "two_month_look_ahead",
    "geographic-diagram",
    "guidelines_for_pac_recording",
    "guidelines_for_public_comments",
    "sect_ii.pdf",
    "2026_awp",
]

MONTH_NAMES = {
    "january":1,"february":2,"march":3,"april":4,"may":5,"june":6,
    "july":7,"august":8,"september":9,"october":10,"november":11,"december":12
}


def extract_date(text):
    """
    Try to parse a meeting date from a document's link-text title.

    Handles:
      "2026-03-10-12 MC A00 - Actions Letter"   -> 2026-03-10
      "2026-03-17 RC A04.a CAR-SA Deliverability" -> 2026-03-17
      "February 24, 2026 TC Meeting Minutes"     -> 2026-02-24
    Returns a date object, or None if no date found.
    """
    t = text.strip()

    m = re.match(r"^(\d{4})-(\d{2})-(\d{2})", t)
    if m:
        try:
            return date(int(m.group(1)), int(m.group(2)), int(m.group(3)))
        except ValueError:
            pass

    m = re.search(
        r"(january|february|march|april|may|june|july|august|"
        r"september|october|november|december)\s+(\d{1,2}),?\s+(\d{4})",
        t.lower()
    )
    if m:
        try:
            return date(int(m.group(3)), MONTH_NAMES[m.group(1)], int(m.group(2)))
        except ValueError:
            pass

    return None


def is_doc_link(href):
    """Return True if href points to a document file (not boilerplate)."""
    if not href:
        return False
    clean = href.split("?")[0]
    if Path(clean).suffix.lower() not in DOC_EXTENSIONS:
        return False
    if any(skip in href.lower() for skip in SKIP_SUBSTRINGS):
        return False
    return True


def make_absolute(href):
    return BASE_URL + href if href.startswith("/") else href


async def scrape_committee(page, committee, cutoff_date):
    """
    Load a committee home page and extract all document links.
    Returns dict: { "YYYY-MM-DD": [ {title, url, ext}, ... ] }
    """
    cid = committee["id"]
    print(f"  [{cid.upper()}] Loading {committee['url']} ...")
    try:
        await page.goto(committee["url"], wait_until="networkidle", timeout=40000)
    except Exception as e:
        print(f"  [{cid.upper()}] ERROR: {e}")
        return {}

    links = await page.query_selector_all("a[href]")

    meetings = {}
    skipped_boilerplate = 0
    skipped_no_date = 0
    skipped_old = 0

    for lnk in links:
        href = (await lnk.get_attribute("href") or "").strip()
        text = (await lnk.inner_text()).strip()

        if not is_doc_link(href):
            skipped_boilerplate += 1
            continue

        href = make_absolute(href)
        ext = Path(href.split("?")[0]).suffix.lower()

        doc_date = extract_date(text)
        if doc_date is None:
            skipped_no_date += 1
            continue

        if doc_date < cutoff_date:
            skipped_old += 1
            continue

        date_str = doc_date.isoformat()
        meetings.setdefault(date_str, []).append({
            "title": text,
            "url":   href,
            "ext":   ext.lstrip(".")
        })

    total_docs = sum(len(v) for v in meetings.values())
    print(f"         {total_docs} docs across {len(meetings)} meeting dates "
          f"(skipped: {skipped_no_date} no-date, {skipped_old} too old)")

    return {
        date_str: sorted(docs, key=lambda d: d["title"])
        for date_str, docs in sorted(meetings.items(), reverse=True)
    }


async def scrape_posted_dates(page, committee):
    """
    Parse the document library table on the committee page to get actual
    posting dates. Returns list of {url, title, ext, posted_date} dicts.

    ISO-NE document tables have headers: ['', 'TITLE AND DESCRIPTION', 'DATE', 'TYPE', 'SIZE']
    The DATE column contains the date the document was posted (MM/DD/YYYY).
    """
    cid = committee["id"]
    docs = []

    tables = await page.query_selector_all("table")
    for tbl in tables:
        headers = await tbl.query_selector_all("th")
        header_texts = [await h.inner_text() for h in headers]

        # Only process the documents table (has a DATE column)
        upper = [h.upper() for h in header_texts]
        if "DATE" not in upper:
            continue

        date_col_idx = upper.index("DATE")

        rows = await tbl.query_selector_all("tr")
        for row in rows[1:]:  # skip header
            cells = await row.query_selector_all("td")
            if len(cells) <= date_col_idx:
                continue

            links = await row.query_selector_all("a[href]")
            if not links:
                continue

            href = (await links[0].get_attribute("href") or "").strip()
            if not is_doc_link(href):
                continue

            href = make_absolute(href)
            title = (await links[0].inner_text()).strip()
            ext = Path(href.split("?")[0]).suffix.lower().lstrip(".")

            date_text = (await cells[date_col_idx].inner_text()).strip()
            try:
                posted = datetime.strptime(date_text, "%m/%d/%Y").date()
            except ValueError:
                continue

            docs.append({
                "url":         href,
                "title":       title,
                "ext":         ext,
                "posted_date": posted,
            })

    print(f"         {len(docs)} docs with posting dates found in document table")
    return docs


async def main(months_back):
    cutoff = date.today() - timedelta(days=months_back * 30)
    yesterday = date.today() - timedelta(days=1)
    now_iso = datetime.utcnow().isoformat(timespec="seconds") + "Z"

    print(f"NEPOOL Material Scraper")
    print(f"Cutoff date : {cutoff}  ({months_back} months back)")
    print(f"New-doc window: posted on or after {yesterday}")
    print(f"Output      : {OUTPUT_FILE}\n")

    results = {
        "scraped_at":   now_iso,
        "cutoff_date":  cutoff.isoformat(),
        "committees":   {}
    }

    all_new_candidates = []  # docs with posting dates, across all committees

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        for committee in COMMITTEES:
            cid = committee["id"]

            # Load the committee page once; both functions use it
            print(f"  [{cid.upper()}] Loading {committee['url']} ...")
            try:
                await page.goto(committee["url"], wait_until="networkidle", timeout=40000)
            except Exception as e:
                print(f"  [{cid.upper()}] ERROR loading page: {e}")
                results["committees"][cid] = {"name": committee["name"], "meetings": {}}
                continue

            # -- Full meeting docs (for scraped_materials.js) --
            links = await page.query_selector_all("a[href]")
            meetings = {}
            skipped_no_date = 0
            skipped_old = 0

            for lnk in links:
                href = (await lnk.get_attribute("href") or "").strip()
                text = (await lnk.inner_text()).strip()

                if not is_doc_link(href):
                    continue

                href = make_absolute(href)
                ext = Path(href.split("?")[0]).suffix.lower()

                doc_date = extract_date(text)
                if doc_date is None:
                    skipped_no_date += 1
                    continue

                if doc_date < cutoff:
                    skipped_old += 1
                    continue

                date_str = doc_date.isoformat()
                meetings.setdefault(date_str, []).append({
                    "title": text,
                    "url":   href,
                    "ext":   ext.lstrip(".")
                })

            total_docs = sum(len(v) for v in meetings.values())
            print(f"         {total_docs} docs across {len(meetings)} meeting dates "
                  f"(skipped: {skipped_no_date} no-date, {skipped_old} too old)")

            results["committees"][cid] = {
                "name":     committee["name"],
                "meetings": {
                    k: sorted(v, key=lambda d: d["title"])
                    for k, v in sorted(meetings.items(), reverse=True)
                }
            }

            # -- Posting-date table (for new_materials.js) --
            tables = await page.query_selector_all("table")
            for tbl in tables:
                headers = await tbl.query_selector_all("th")
                header_texts = [await h.inner_text() for h in headers]
                upper = [h.upper() for h in header_texts]
                if "DATE" not in upper:
                    continue

                date_col_idx = upper.index("DATE")
                rows = await tbl.query_selector_all("tr")

                for row in rows[1:]:
                    cells = await row.query_selector_all("td")
                    if len(cells) <= date_col_idx:
                        continue
                    row_links = await row.query_selector_all("a[href]")
                    if not row_links:
                        continue

                    href = (await row_links[0].get_attribute("href") or "").strip()
                    if not is_doc_link(href):
                        continue

                    href = make_absolute(href)
                    title = (await row_links[0].inner_text()).strip()
                    ext = Path(href.split("?")[0]).suffix.lower().lstrip(".")

                    date_text = (await cells[date_col_idx].inner_text()).strip()
                    try:
                        posted = datetime.strptime(date_text, "%m/%d/%Y").date()
                    except ValueError:
                        continue

                    if posted >= yesterday:
                        all_new_candidates.append({
                            "committee_id":   cid,
                            "committee_name": committee["name"],
                            "url":            href,
                            "title":          title,
                            "ext":            ext,
                            "posted_date":    posted.isoformat(),
                            "found_at":       now_iso,
                        })

        await browser.close()

    # -- Write scraped_materials.json / .js --
    OUTPUT_FILE.parent.mkdir(exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    js_file = OUTPUT_FILE.parent / "scraped_materials.js"
    with open(js_file, "w", encoding="utf-8") as f:
        f.write("// Auto-generated by scrape_materials.py -- do not edit manually.\n")
        f.write("window.SCRAPED_DATA = ")
        json.dump(results, f, indent=2, ensure_ascii=False)
        f.write(";\n")

    # -- Deduplicate new candidates by URL --
    seen = set()
    new_docs = []
    for d in all_new_candidates:
        if d["url"] not in seen:
            seen.add(d["url"])
            new_docs.append(d)

    new_materials_data = {"generated_at": now_iso, "new_docs": new_docs}
    with open(NEW_MATERIALS_FILE, "w", encoding="utf-8") as f:
        json.dump(new_materials_data, f, indent=2, ensure_ascii=False)

    js_new = OUTPUT_FILE.parent / "new_materials.js"
    with open(js_new, "w", encoding="utf-8") as f:
        f.write("// Auto-generated by scrape_materials.py -- do not edit manually.\n")
        f.write("window.NEW_MATERIALS_DATA = ")
        json.dump(new_materials_data, f, indent=2, ensure_ascii=False)
        f.write(";\n")

    # -- Summary --
    print(f"\n{'='*55}")
    print(f"SUMMARY")
    print(f"{'='*55}")
    for cid, data in results["committees"].items():
        mtgs = data["meetings"]
        if mtgs:
            latest = max(mtgs.keys())
            total  = sum(len(v) for v in mtgs.values())
            print(f"  {cid.upper():6}  {len(mtgs)} meetings  {total:3} docs   latest: {latest}")
        else:
            print(f"  {cid.upper():6}  (no meetings found in window)")

    print(f"\nSaved to {OUTPUT_FILE}")
    print(f"New materials (posted today or yesterday): {len(new_docs)}")
    if new_docs:
        for d in new_docs:
            print(f"  [{d['committee_id'].upper()}] {d['posted_date']}  {d['title'][:70]}")
    print("Run this script daily to keep materials current.")


if __name__ == "__main__":
    months = 6
    args = sys.argv[1:]
    for i, arg in enumerate(args):
        if arg == "--months" and i + 1 < len(args):
            months = int(args[i + 1])
        elif arg.startswith("--months="):
            months = int(arg.split("=", 1)[1])
    asyncio.run(main(months))
