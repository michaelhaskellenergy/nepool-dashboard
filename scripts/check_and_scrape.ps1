# scripts/check_and_scrape.ps1
#
# Runs weekdays at 8 AM (via Windows Task Scheduler — see register_task.ps1).
# Scrapes ISO-NE committee pages for new documents, then commits and pushes
# the updated data/scraped_materials.js and data/new_materials.js files to
# GitHub so the live site reflects new materials within 24 hours.

$ScriptDir  = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectDir = Split-Path -Parent $ScriptDir
$LogFile    = Join-Path $ProjectDir "data\scrape_log.txt"

function Log($msg) {
    $line = "$(Get-Date -Format 'yyyy-MM-dd HH:mm')  $msg"
    Write-Host $line
    Add-Content -Path $LogFile -Value $line
}

# ── Safety check: never run on weekends ──────────────────────────────────────
$today = [datetime]::Today
if ($today.DayOfWeek -eq 'Saturday' -or $today.DayOfWeek -eq 'Sunday') {
    Log "Weekend — skipping."
    exit 0
}

Log "=== NEPOOL Scraper run: $($today.ToString('ddd yyyy-MM-dd')) ==="

# ── Run scraper ───────────────────────────────────────────────────────────────
$scraper = Join-Path $ScriptDir "scrape_materials.py"
Log "Running scraper..."

python $scraper --months 6 2>&1 | ForEach-Object { Log "  $_" }

if ($LASTEXITCODE -ne 0) {
    Log "ERROR: scraper exited with code $LASTEXITCODE. Aborting git push."
    exit $LASTEXITCODE
}
Log "Scraper completed successfully."

# ── Commit and push updated data files to GitHub ─────────────────────────────
Set-Location $ProjectDir

# Stage only the auto-generated browser files (not the raw .json files)
git add data/scraped_materials.js data/new_materials.js 2>&1 | ForEach-Object { Log "  git: $_" }

# Check if there is anything to commit
$status = git status --porcelain data/scraped_materials.js data/new_materials.js 2>&1
if (-not $status) {
    Log "No changes to commit — materials unchanged since last run."
    exit 0
}

$commitMsg = "Auto-scrape: $($today.ToString('yyyy-MM-dd'))"
git commit -m $commitMsg 2>&1 | ForEach-Object { Log "  git: $_" }

if ($LASTEXITCODE -ne 0) {
    Log "ERROR: git commit failed (exit $LASTEXITCODE)."
    exit $LASTEXITCODE
}

git push 2>&1 | ForEach-Object { Log "  git: $_" }

if ($LASTEXITCODE -eq 0) {
    Log "Pushed to GitHub. Live site will update within ~60 seconds."
} else {
    Log "ERROR: git push failed (exit $LASTEXITCODE). Check credentials."
    exit $LASTEXITCODE
}
