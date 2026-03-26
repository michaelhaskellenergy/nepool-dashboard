# scripts/install_git_hook.ps1
#
# Installs a git pre-commit hook that runs validate_meetings.py before
# every commit. Bad data (duplicate times, invalid fields, etc.) will
# block the commit until fixed.
#
# Run once from the repo root:
#   .\scripts\install_git_hook.ps1

$RepoRoot  = Split-Path -Parent $PSScriptRoot
$HookDir   = Join-Path $RepoRoot ".git\hooks"
$HookFile  = Join-Path $HookDir "pre-commit"

$HookContent = @'
#!/bin/sh
# Pre-commit hook: validate meetings.js before allowing a commit.
cd "$(git rev-parse --show-toplevel)"
python scripts/validate_meetings.py
if [ $? -ne 0 ]; then
    echo ""
    echo "Commit blocked. Fix the errors above, then try again."
    exit 1
fi
'@

if (-not (Test-Path $HookDir)) {
    Write-Host "ERROR: .git/hooks directory not found. Are you in a git repo?" -ForegroundColor Red
    exit 1
}

# Write with Unix line endings (LF) — required for git bash to execute the hook
$Utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($HookFile, ($HookContent -replace "`r`n", "`n"), $Utf8NoBom)

Write-Host "Pre-commit hook installed at: $HookFile"
Write-Host ""
Write-Host "From now on, every 'git commit' will run validate_meetings.py"
Write-Host "automatically. Commits with data errors will be blocked."
Write-Host ""
Write-Host "To test it now without committing:"
Write-Host "  python scripts/validate_meetings.py"
