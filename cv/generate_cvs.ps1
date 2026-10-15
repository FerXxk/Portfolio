# Paths are relative to this script, so it works from any clone of the repo
$SourceDir = $PSScriptRoot
$TypstDir = Join-Path $SourceDir "typst_cv"
$ProjectRoot = Split-Path $SourceDir -Parent
$PublicDir = Join-Path $ProjectRoot "public\cv"
$HistoryDir = Join-Path $SourceDir "historical_cvs"

# Typst from PATH (winget install Typst.Typst); override with $env:TYPST_EXE
$TypstExe = if ($env:TYPST_EXE) { $env:TYPST_EXE } else { (Get-Command typst -ErrorAction Stop).Source }

# Ensure directories exist
if (!(Test-Path $PublicDir)) { New-Item -ItemType Directory -Force -Path $PublicDir }
if (!(Test-Path $HistoryDir)) { New-Item -ItemType Directory -Force -Path $HistoryDir }

$Files = @(
    @{ Source = "cv_fernando_roman.typ"; Output = "cv_fernando_roman.pdf" },
    @{ Source = "cv_fernando_roman_en.typ"; Output = "cv_fernando_roman_en.pdf" }
)

foreach ($item in $Files) {
    $typName = $item.Source
    $pdfName = $item.Output
    Write-Host "--- Processing $typName ---" -ForegroundColor Cyan

    $sourcePdf = Join-Path $SourceDir $pdfName
    $publicPdf = Join-Path $PublicDir $pdfName

    # Archive existing PDF from public folder if it exists
    if (Test-Path $publicPdf) {
        $timestamp = Get-Date -Format "yyyyMMdd_HHmm"
        $archiveName = $pdfName.Replace(".pdf", "_$timestamp.pdf")
        $archivePath = Join-Path $HistoryDir $archiveName
        Write-Host "Archiving existing $pdfName from public to history..." -ForegroundColor Cyan
        Move-Item -Path $publicPdf -Destination $archivePath -Force
    }

    # Run typst compile
    Write-Host "Compiling $typName with Typst..." -ForegroundColor Yellow
    Push-Location $TypstDir
    & $TypstExe compile --root $ProjectRoot $typName $sourcePdf
    Pop-Location

    $destPdf = Join-Path $PublicDir $pdfName
    if (Test-Path $sourcePdf) {
        Write-Host "Success: Copying $pdfName to public folder..." -ForegroundColor Green
        Copy-Item -Path $sourcePdf -Destination $destPdf -Force
    }
    else {
        Write-Host "Error: $pdfName was not generated." -ForegroundColor Red
    }
}

Write-Host "Bilingual CV generation complete!" -ForegroundColor Green

