$SourceDir = "c:\Users\ferna\Desktop\CV interactivo\cv"
$TypstDir = Join-Path $SourceDir "typst_cv"
$PublicDir = "c:\Users\ferna\Desktop\CV interactivo\public\cv"
$HistoryDir = Join-Path $SourceDir "historical_cvs"

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
    
    # Archive existing PDF if it exists
    if (Test-Path $sourcePdf) {
        $timestamp = Get-Date -Format "yyyyMMdd_HHmm"
        $archiveName = $pdfName.Replace(".pdf", "_$timestamp.pdf")
        $archivePath = Join-Path $HistoryDir $archiveName
        Write-Host "Archiving existing $pdfName to history..." -ForegroundColor Cyan
        Move-Item -Path $sourcePdf -Destination $archivePath -Force
    }

    # Run typst compile
    Write-Host "Compiling $typName with Typst..." -ForegroundColor Yellow
    Push-Location $TypstDir
    typst compile $typName $sourcePdf --font-path ../fonts
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

