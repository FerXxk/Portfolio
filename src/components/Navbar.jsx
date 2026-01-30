import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';

const Navbar = () => {
  const navRef = useRef(null);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    });
  }, []);

  return (
    <nav className="lab-nav" ref={navRef}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          FERNANDO<span>.</span>RO
        </a>

        <div className="nav-links">
          <a href="#about-section" className="nav-item">{t.about}</a>
          <a href="#projects" className="nav-item">{t.projects}</a>
          <a href="#contact-section" className="nav-item">{t.contact}</a>

          <div className="language-selector">
            <button
              className={`lang-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => setLanguage('es')}
            >
              ES
            </button>
            <span className="lang-divider">/</span>
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>

          <a href="cv/cv_fernando_roman.pdf" target="_blank" className="nav-button">
            {t.cv_es}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="cv/cv_fernando_roman_en.pdf" target="_blank" className="nav-button accent-btn">
            {t.cv_en}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .lab-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 2rem 0;
          mix-blend-mode: difference;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: -0.02em;
        }
        .nav-logo span {
          color: var(--accent);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 3rem;
        }
        .nav-item {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }
        .nav-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 1px solid var(--glass-border);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        .nav-button:hover {
          background: var(--primary);
          color: var(--bg-dark);
          border-color: var(--primary);
        }
        .nav-button svg {
          width: 14px;
          height: 14px;
        }
        .language-selector {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          margin-right: 1rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.3rem 0.6rem;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
        }
        .lang-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 0.7rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
        }
        .lang-btn.active {
          color: var(--accent);
        }
        .lang-btn:hover:not(.active) {
          color: var(--primary);
        }
        .lang-divider {
          color: var(--glass-border);
          font-size: 0.7rem;
        }
        @media (max-width: 768px) {
          .nav-item { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
