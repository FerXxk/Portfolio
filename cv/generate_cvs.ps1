$PDFFontPath = "C:\Users\ferna\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe"
$SourceDir = "c:\Users\ferna\Desktop\CV interactivo\cv"
$PublicDir = "c:\Users\ferna\Desktop\CV interactivo\public\cv"

if (!(Test-Path $PublicDir)) {
    New-Item -ItemType Directory -Force -Path $PublicDir
}

$Files = @("cv_fernando_roman.tex", "cv_fernando_roman_en.tex")

foreach ($file in $Files) {
    Write-Host "--- Compiling $file ---" -ForegroundColor Cyan
    $fullPath = Join-Path $SourceDir $file
    
    # Run pdflatex twice for references/links
    # Using working directory instead of output-directory to avoid path issues
    Push-Location $SourceDir
    & $PDFFontPath -interaction=nonstopmode $file
    & $PDFFontPath -interaction=nonstopmode $file
    Pop-Location
    
    $pdfName = $file.Replace(".tex", ".pdf")
    $sourcePdf = Join-Path $SourceDir $pdfName
    $destPdf = Join-Path $PublicDir $pdfName
    
    if (Test-Path $sourcePdf) {
        Write-Host "Success: Copying $pdfName to public folder..." -ForegroundColor Green
        Copy-Item -Path $sourcePdf -Destination $destPdf -Force
    } else {
        Write-Host "Error: $pdfName was not generated at $sourcePdf" -ForegroundColor Red
    }
}

Write-Host "Cleanup of intermediate files..." -ForegroundColor Yellow
$Exts = @("*.aux", "*.log", "*.out", "*.gz")
foreach ($ext in $Exts) {
    Get-ChildItem -Path $SourceDir -Filter $ext | Remove-Item -Force -ErrorAction SilentlyContinue
}

Write-Host "Bilingual CV generation complete!" -ForegroundColor Green
