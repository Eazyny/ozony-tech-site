$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$SourceRoot = Join-Path $ScriptDir "reactbits-upgrade-files"
$RepoRoot = (Get-Location).Path

if (-not (Test-Path (Join-Path $RepoRoot "package.json"))) {
  throw "Run this script from the root of your Ozony Tech project, where package.json exists."
}

if (-not (Test-Path $SourceRoot)) {
  throw "Could not find reactbits-upgrade-files next to this script. Keep the folder and this script together."
}

$Files = @(
  @{ Source = "src\components\ui\spotlight-card.jsx"; Destination = "src\components\ui\spotlight-card.jsx" },
  @{ Source = "src\components\ui\star-border.jsx"; Destination = "src\components\ui\star-border.jsx" },
  @{ Source = "src\components\Header.jsx"; Destination = "src\components\Header.jsx" },
  @{ Source = "src\components\Hero.jsx"; Destination = "src\components\Hero.jsx" },
  @{ Source = "src\components\Services.jsx"; Destination = "src\components\Services.jsx" },
  @{ Source = "src\components\AILeadAgentTeaser.jsx"; Destination = "src\components\AILeadAgentTeaser.jsx" },
  @{ Source = "src\components\About.jsx"; Destination = "src\components\About.jsx" },
  @{ Source = "src\components\Contact.jsx"; Destination = "src\components\Contact.jsx" }
)

Write-Host "Applying Ozony Tech React Bits-style visual upgrade..." -ForegroundColor Cyan

foreach ($File in $Files) {
  $SourcePath = Join-Path $SourceRoot $File.Source
  $DestinationPath = Join-Path $RepoRoot $File.Destination
  $DestinationDir = Split-Path -Parent $DestinationPath

  if (-not (Test-Path $SourcePath)) {
    throw "Missing source file: $SourcePath"
  }

  if (-not (Test-Path $DestinationDir)) {
    New-Item -ItemType Directory -Path $DestinationDir -Force | Out-Null
  }

  Copy-Item -Path $SourcePath -Destination $DestinationPath -Force
  Write-Host "Updated $($File.Destination)" -ForegroundColor Green
}

Write-Host "\nSwap complete. Now run:" -ForegroundColor Cyan
Write-Host "npm run build" -ForegroundColor Yellow
Write-Host "git status" -ForegroundColor Yellow
