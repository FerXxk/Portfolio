# Fernando Román - Interactive Portfolio & CV

Visit the live version at [Fernando Román - Interactive Portfolio & CV](https://ferxxk.github.io/Portfolio/).

A high-performance, interactive portfolio built with **React**, **GSAP**, and **Vite**. This project showcases my work as a Robotics Engineer and provides an automated system for generating bilingual CVs.

## 🚀 Key Features

- **Interactive UI**: Smooth animations and staggered reveals using GSAP and Lenis Scroll.
- **Bilingual Support**: Full English (EN) and Spanish (ES) localization across all sections.
- **Mobile First**: Fully optimized responsive design with a dedicated animated mobile navigation menu.
- **Dynamic Projects**: Real-time integration with GitHub API to showcase the latest repositories.
- **Modern Tech Stack Display**: Curated technology categories highlighting expertise in Embedded Systems, AI, and Robotics.

## 🛠️ Components & Architecture

- **Navbar**: Features a custom logo (**FERNANDO.PORTFOLIO**) and a state-managed mobile menu.
- **Hero**: Clean, impact-driven title with animated badges.
- **About**: Custom description and a modern, categorized tech-stack grid.
- **Projects**: Dynamic project cards with glassmorphism effects and automatic translation support.
- **Contact**: Interactive cards for email, LinkedIn, and phone.

## 🤖 Automation & Scripts

### 1. GitHub Project Descriptions
To keep the portfolio synchronized with the latest GitHub work, a custom script is provided:
```bash
node scripts/fetch_repos.js
```
This script:
- Fetches all repository descriptions from GitHub.
- Prepares a structured data file at `src/data/projectDescriptions.js`.
- Allows for easy translation of new project details into both supported languages.

### 2. PDF CV Generation
The project includes a modular LaTeX system for generating professional PDFs.
- Location: `/cv`
- Script: `generate_cvs.ps1` (PowerShell)
- See [cv/README.md](cv/README.md) for detailed build instructions.

## 📦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

---
*Created by Fernando Román Hidalgo - 2026*
