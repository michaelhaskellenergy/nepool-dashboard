# scripts/register_task.ps1
#
# Registers check_and_scrape.ps1 with Windows Task Scheduler.
# Run this ONCE from an elevated (Administrator) PowerShell prompt.
#
# Usage:
#   Right-click PowerShell → "Run as Administrator", then:
#   cd C:\Users\micha\nepool-tracker
#   .\scripts\register_task.ps1

$TaskName   = "NEPOOL Scraper - Daily Check"
$ScriptPath = "$PSScriptRoot\check_and_scrape.ps1"
$RunAt      = "08:00"   # 8:00 AM — change if you prefer a different time

# Trigger: every weekday (Mon–Fri) at $RunAt
$trigger = New-ScheduledTaskTrigger `
    -Weekly `
    -DaysOfWeek Monday, Tuesday, Wednesday, Thursday, Friday `
    -At $RunAt

# Action: run PowerShell with the check script
$action = New-ScheduledTaskAction `
    -Execute "powershell.exe" `
    -Argument "-NonInteractive -ExecutionPolicy Bypass -File `"$ScriptPath`""

# Settings: run even if on battery, don't stop after 3 days
$settings = New-ScheduledTaskSettingsSet `
    -ExecutionTimeLimit (New-TimeSpan -Hours 1)

# Register (or update if already exists)
if (Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue) {
    Set-ScheduledTask -TaskName $TaskName -Trigger $trigger -Action $action -Settings $settings
    Write-Host "Updated existing task: '$TaskName'"
} else {
    Register-ScheduledTask `
        -TaskName $TaskName `
        -Trigger  $trigger `
        -Action   $action `
        -Settings $settings `
        -RunLevel Highest `
        -Force
    Write-Host "Registered new task: '$TaskName'"
}

Write-Host ""
Write-Host "Task runs weekdays at $RunAt."
Write-Host "Scraper fires when a meeting is exactly 1, 2, 3, or 5 days away."
Write-Host "Logs written to: data\scrape_log.txt"
Write-Host ""
Write-Host "To test immediately: Start-ScheduledTask -TaskName '$TaskName'"
Write-Host "To view in GUI:      taskschd.msc"
