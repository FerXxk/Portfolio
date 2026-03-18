# CV Interactivo - PDF Generation

This folder contains the Typst source code for Fernando Román's CV in both Spanish and English.

## Structure

```
cv/
├── typst_cv/                   # Typst source files
│   ├── cv_fernando_roman.typ    # Spanish CV driver file
│   ├── cv_fernando_roman_en.typ # English CV driver file
│   ├── template.typ             # Modern CV template customization
│   └── sections/                # Modular content sections (.typ)
├── generate_cvs.ps1            # PowerShell build script
├── images/                     # Logos and profile pictures
└── fonts/                      # Font files (Roboto, etc.)
```

## Requirements

- **Typst** compiler installed and available in PATH.
- **PowerShell** to run the build script.

## How to Build

Run the `generate_cvs.ps1` script from the project root or the `cv` folder:

```powershell
.\cv\generate_cvs.ps1
```

This script will:
1.  Compile the `.typ` files using `typst compile`.
2.  Move the generated PDFs to `public/cv/`.
3.  Archive previous PDF versions in `cv/historical_cvs/`.

## Customization

- **Logos**: Institution logos are stored in `cv/images/`.
- **Sections**: Content is modularized in `cv/typst_cv/sections/`.

