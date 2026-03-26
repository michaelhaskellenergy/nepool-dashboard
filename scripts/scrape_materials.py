"""
NEPOOL Material Scraper — scripts/scrape_materials.py

Visits each ISO-NE committee page, extracts posted document links,
groups by meeting date, and saves to data/scraped_materials.json.

Usage:
    python scripts/scrape_materials.py                # default: 6 months back
    python scripts/scrape_materials.py --months 3     # only 3 months back
    python scripts/scrape_materials.py --months 12    # full year

Output: data/scraped_materials.json
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

COMMITTEES = [
    {"id": "pc",   "name": "Participants Committee",           "url": f"{BASE_URL}/committees/participants/participants-committee"},
    {"id": "mc",   "name": "Markets Committee",                "url": f"{BASE_URL}/committees/markets/markets-committee"},
    {"id": "rc",   "name": "Reliability Committee",            "url": f"{BASE_URL}/committees/reliability/reliability-committee"},
    {"id": "tc",   "name": "Transmission Committee",           "url": f"{BASE_URL}/committees/transmission/transmission-committee"},
    {"id": "pac",  "name": "Planning Advisory Committee",      "url": f"{BASE_URL}/committees/planning/planning-advisory"},
    {"id": "lfwg", "name": "Load Forecasting Working Group",   "url": f"{BASE_URL}/committees/reliability/load-forecast"},
    {"id": "dgwg", "name": "Distributed Generation Working Group", "url": f"{BASE_URL}/committees/markets/distributed-generation-working-group"},
]

DOC_EXTENSIONS = {".pdf", ".xlsx", ".xls", ".docx", ".doc", ".pptx", ".ppt", ".zip"}

# Boilerplate links present on every page — skip these
SKIP_SUBSTRINGS = [
    "techcomm_bylaws",
    "nepool_meeting_guest_attendance",
    "car_proposal_information_summary",
    "asset_condition_reviewer_proposal_information_summary",
    "two_month_look_ahead",
    "geographic-diagram",
    "guidelines_for_pac_recording",
    "guidelines_for_public_comments",
    "sect_ii.pdf",                  # tariff document
    "2026_awp",                     # annual work plan
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
      "2026-02-10-11 MC/RC A02.1.a ..."          -> 2026-02-10
    Returns a date object, or None if no date found.
    """
    t = text.strip()

    # Pattern 1: starts with YYYY-MM-DD (optionally followed by -DD range)
    m = re.match(r"^(\d{4})-(\d{2})-(\d{2})", t)
    if m:
        try:
            return date(int(m.group(1)), int(m.group(2)), int(m.group(3)))
        except ValueError:
            pass

    # Pattern 2: "Month DD, YYYY" or "Month DD YYYY" anywhere in text
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


async def scrape_committee(page, committee, cutoff_date):
    """
    Load a committee home page and extract all document links.
    Returns dict: { "YYYY-MM-DD": [ {title, url, ext}, ... ] }
    """
    print(f"  [{committee['id'].upper()}] Loading {committee['url']} ...")
    try:
        await page.goto(committee["url"], wait_until="networkidle", timeout=40000)
    except Exception as e:
        print(f"  [{committee['id'].upper()}] ERROR: {e}")
        return {}

    links = await page.query_selector_all("a[href]")

    meetings = {}   # date_str -> list of doc dicts
    skipped_boilerplate = 0
    skipped_no_date = 0
    skipped_old = 0

    for lnk in links:
        href = (await lnk.get_attribute("href") or "").strip()
        text = (await lnk.inner_text()).strip()

        # Must be a document file extension
        clean_path = href.split("?")[0]
        ext = Path(clean_path).suffix.lower()
        if ext not in DOC_EXTENSIONS:
            continue

        # Skip boilerplate standing documents
        if any(skip in href.lower() for skip in SKIP_SUBSTRINGS):
            skipped_boilerplate += 1
            continue

        # Make absolute URL
        if href.startswith("/"):
            href = BASE_URL + href

        # Parse meeting date from link text
        doc_date = extract_date(text)
        if doc_date is None:
            skipped_no_date += 1
            continue

        # Skip documents older than cutoff
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
          f"(skipped: {skipped_boilerplate} boilerplate, "
          f"{skipped_no_date} no-date, {skipped_old} too old)")

    # Sort docs within each meeting by title
    return {
        date_str: sorted(docs, key=lambda d: d["title"])
        for date_str, docs in sorted(meetings.items(), reverse=True)
    }


async def main(months_back):
    cutoff = date.today() - timedelta(days=months_back * 30)
    print(f"NEPOOL Material Scraper")
    print(f"Cutoff date: {cutoff}  ({months_back} months back)")
    print(f"Output:      {OUTPUT_FILE}\n")

    results = {
        "scraped_at": datetime.now().isoformat(timespec="seconds"),
        "cutoff_date": cutoff.isoformat(),
        "committees": {}
    }

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        for committee in COMMITTEES:
            meetings = await scrape_committee(page, committee, cutoff)
            results["committees"][committee["id"]] = {
                "name":     committee["name"],
                "meetings": meetings
            }

        await browser.close()

    OUTPUT_FILE.parent.mkdir(exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    # Also write a browser-loadable JS version for index.html
    js_file = OUTPUT_FILE.parent / "scraped_materials.js"
    with open(js_file, "w", encoding="utf-8") as f:
        f.write("// Auto-generated by scrape_materials.py — do not edit manually.\n")
        f.write("window.SCRAPED_DATA = ")
        json.dump(results, f, indent=2, ensure_ascii=False)
        f.write(";\n")

    # Print summary
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
    print("Run this script weekly to keep materials current.")


if __name__ == "__main__":
    months = 6
    args = sys.argv[1:]
    for i, arg in enumerate(args):
        if arg == "--months" and i + 1 < len(args):
            months = int(args[i + 1])
        elif arg.startswith("--months="):
            months = int(arg.split("=", 1)[1])
    asyncio.run(main(months))
