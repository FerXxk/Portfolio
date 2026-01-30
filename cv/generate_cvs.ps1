$PDFFontPath = "C:\Users\ferna\AppData\Local\Programs\MiKTeX\miktex\bin\x64\xelatex.exe"
$SourceDir = "c:\Users\ferna\Desktop\CV interactivo\cv"
$PublicDir = "c:\Users\ferna\Desktop\CV interactivo\public\cv"
$HistoryDir = Join-Path $SourceDir "historical_cvs"

# Ensure directories exist
if (!(Test-Path $PublicDir)) { New-Item -ItemType Directory -Force -Path $PublicDir }
if (!(Test-Path $HistoryDir)) { New-Item -ItemType Directory -Force -Path $HistoryDir }

$Files = @("cv_fernando_roman.tex", "cv_fernando_roman_en.tex")

foreach ($file in $Files) {
    Write-Host "--- Processing $file ---" -ForegroundColor Cyan
    $pdfName = $file.Replace(".tex", ".pdf")
    $sourcePdf = Join-Path $SourceDir $pdfName
    
    # Archive existing PDF if it exists
    if (Test-Path $sourcePdf) {
        $timestamp = Get-Date -Format "yyyyMMdd_HHmm"
        $archiveName = $pdfName.Replace(".pdf", "_$timestamp.pdf")
        $archivePath = Join-Path $HistoryDir $archiveName
        Write-Host "Archiving existing $pdfName to history..." -ForegroundColor Cyan
        Move-Item -Path $sourcePdf -Destination $archivePath -Force
    }

    # Run xelatex twice
    Push-Location $SourceDir
    # Add lib directory to TEXINPUTS to assume cls/sty files are found
    $env:TEXINPUTS = ".;$SourceDir\lib\;" 
    
    & $PDFFontPath -interaction=nonstopmode -no-pdf $file
    & $PDFFontPath -interaction=nonstopmode $file
    
    # Clean up env var just in case
    $env:TEXINPUTS = ""
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

Write-Host "Cleanup of intermediate files..." -ForegroundColor Yellow
$Exts = @("*.aux", "*.log", "*.out", "*.gz", "*.xdv")
foreach ($ext in $Exts) {
    Get-ChildItem -Path $SourceDir -Filter $ext | Remove-Item -Force -ErrorAction SilentlyContinue
}

Write-Host "Bilingual CV generation complete!" -ForegroundColor Green
