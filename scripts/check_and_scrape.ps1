# scripts/check_and_scrape.ps1
#
# Run daily via Windows Task Scheduler (weekdays only).
# Checks if today is a trigger day for any upcoming meeting:
#   5 days before = 120 hours
#   3 days before =  72 hours
#   2 days before =  48 hours
#   1 day  before =  24 hours
# Runs scrape_materials.py if a trigger fires. Never runs on weekends.
#
# Setup: see README or run Set-ScheduledTask.ps1 to register with Task Scheduler.

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

# ── Read upcoming meeting dates from meetings.js ──────────────────────────────
$meetingsFile = Join-Path $ProjectDir "data\meetings.js"
if (-not (Test-Path $meetingsFile)) {
    Log "ERROR: $meetingsFile not found."
    exit 1
}

$content = Get-Content $meetingsFile -Raw

# Extract every "date": "YYYY-MM-DD" value, keep only future dates
$upcomingDates = [regex]::Matches($content, '"date"\s*:\s*"(\d{4}-\d{2}-\d{2})"') |
    ForEach-Object { [datetime]::ParseExact($_.Groups[1].Value, 'yyyy-MM-dd', $null) } |
    Where-Object { $_ -gt $today } |
    Sort-Object -Unique

if ($upcomingDates.Count -eq 0) {
    Log "No upcoming meetings found in meetings.js — nothing to do."
    exit 0
}

# ── Check trigger days (hours / 24) ──────────────────────────────────────────
$triggerDays = @(1, 2, 3, 5)   # 24h, 48h, 72h, 120h
$triggered   = $false

foreach ($meetingDate in $upcomingDates) {
    $daysUntil = ($meetingDate - $today).Days
    if ($triggerDays -contains $daysUntil) {
        Log "TRIGGER: meeting on $($meetingDate.ToString('yyyy-MM-dd')) is $daysUntil day(s) away."
        $triggered = $true
    }
}

if (-not $triggered) {
    Log "No trigger today ($($today.ToString('ddd yyyy-MM-dd')))."
    exit 0
}

# ── Run scraper ───────────────────────────────────────────────────────────────
$scraper = Join-Path $ScriptDir "scrape_materials.py"
Log "Running scraper..."

python $scraper --months 2 2>&1 | ForEach-Object { Log "  $_" }

if ($LASTEXITCODE -eq 0) {
    Log "Scraper completed successfully."
} else {
    Log "ERROR: scraper exited with code $LASTEXITCODE."
    exit $LASTEXITCODE
}
