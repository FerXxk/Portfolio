# CV Interactivo - PDF Generation

This folder contains the LaTeX source code for Fernando Román's CV in both Spanish and English.

## Structure

```
cv/
├── cv_fernando_roman.tex       # Spanish CV driver file
├── cv_fernando_roman_en.tex    # English CV driver file
├── generate_cvs.ps1            # PowerShell build script
├── lib/
│   ├── awesome-cv.cls          # LaTeX class file
│   └── fontawesome.sty         # FontAwesome icons support
├── sections/                   # Modular content sections
│   ├── education.tex / _en.tex
│   ├── experience.tex / _en.tex
│   ├── skills.tex / _en.tex
│   ├── soft_skills.tex / _en.tex
│   ├── languages.tex / _en.tex
│   ├── honors.tex / _en.tex
│   └── projects.tex / _en.tex
├── images/                     # Logos and profile pictures
└── fonts/                      # Font files (Roboto, etc.)
```

## Requirements

- **MiKTeX** (or TeX Live) with `xelatex` installed.
- **PowerShell** to run the build script.

## How to Build

Run the `generate_cvs.ps1` script from the project root or the `cv` folder:

```powershell
.\cv\generate_cvs.ps1
```

This script will:
1.  Compile `cv_fernando_roman.tex` and `cv_fernando_roman_en.tex` using `xelatex`.
2.  Clean up intermediate files (`.aux`, `.log`, `.out`, etc.).
3.  Move the generated PDFs to `public/cv/`.
4.  Archive previous PDF versions in `cv/historical_cvs/`.

## Customization

- **Logos**: Institution logos are stored in `cv/images/`. To update them, replace the files and ensure filename consistency in `sections/education.tex` and `sections/experience.tex`.
- **Colors**: Main color is defined in the driver files (`\colorlet{awesome}{awesome-red}`).
