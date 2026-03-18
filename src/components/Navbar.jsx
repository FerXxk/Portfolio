import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';

const Navbar = () => {
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out"
      });
      // Staggered animation for links
      gsap.fromTo(".mobile-nav-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, delay: 0.2 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in"
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isScrolledClass = isScrolled ? 'scrolled' : '';

  return (
    <nav className={`lab-nav ${isScrolledClass}`} ref={navRef}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          FERNANDO<span>.</span>PORTFOLIO
        </a>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about-section" className="nav-item" onClick={() => setIsMenuOpen(false)}>{t.about}</a>
          <a href="#projects" className="nav-item" onClick={() => setIsMenuOpen(false)}>{t.projects}</a>
          <a href="#contact-section" className="nav-item" onClick={() => setIsMenuOpen(false)}>{t.contact}</a>

          <div className="language-selector">
            <button
              className={`lang-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => { setLanguage('es'); setIsMenuOpen(false); }}
            >
              ES
            </button>
            <span className="lang-divider">/</span>
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => { setLanguage('en'); setIsMenuOpen(false); }}
            >
              EN
            </button>
          </div>

          <div className="cv-buttons">
            <a href="cv/cv_fernando_roman.pdf?v=1.0.1" target="_blank" className="nav-button">
              {t.cv_es}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="cv/cv_fernando_roman_en.pdf?v=1.0.1" target="_blank" className="nav-button accent-btn">
              {t.cv_en}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="mobile-menu-overlay" ref={mobileMenuRef} style={{ transform: 'translateX(100%)', opacity: 0 }}>
        <div className="mobile-menu-content">
          <a href="#about-section" className="mobile-nav-item" onClick={toggleMenu}>{t.about}</a>
          <a href="#projects" className="mobile-nav-item" onClick={toggleMenu}>{t.projects}</a>
          <a href="#contact-section" className="mobile-nav-item" onClick={toggleMenu}>{t.contact}</a>

          <div className="mobile-language-selector">
            <button
              className={`lang-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => { setLanguage('es'); toggleMenu(); }}
            >
              ES
            </button>
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => { setLanguage('en'); toggleMenu(); }}
            >
              EN
            </button>
          </div>

          <div className="mobile-cv-buttons">
            <a href="cv/cv_fernando_roman.pdf?v=1.0.1" target="_blank" className="nav-button">
              {t.cv_es}
            </a>
            <a href="cv/cv_fernando_roman_en.pdf?v=1.0.1" target="_blank" className="nav-button accent-btn">
              {t.cv_en}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lab-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 2rem 0;
          transition: background 0.5s ease, padding 0.5s ease, border 0.5s ease, backdrop-filter 0.5s ease;
          color: var(--text-main);
        }
        .lab-nav.scrolled {
          padding: 1rem 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        /* Top Gradient Fade Overlay */
        .lab-nav::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 140%;
          background: linear-gradient(to bottom, var(--bg-dark) 0%, rgba(0, 0, 0, 0.7) 60%, transparent 100%);
          z-index: -1;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .lab-nav.scrolled::after {
          opacity: 1;
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
          color: var(--text-main);
        }
        .nav-logo span {
          color: var(--accent);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-item {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-main);
          opacity: 0.8;
          font-weight: 600;
          transition: opacity 0.3s ease;
        }
        .nav-item:hover {
          opacity: 1;
          color: var(--accent);
        }
        .cv-buttons {
          display: flex;
          gap: 1rem;
        }
        .nav-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          border: 1px solid var(--glass-border);
          padding: 0.5rem 1.2rem;
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
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 101;
        }
        .hamburger span {
          display: block;
          width: 25px;
          height: 2px;
          background-color: var(--text-main);
          transition: all 0.3s ease;
        }
        .hamburger.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--bg-dark);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .mobile-menu-overlay[style*="opacity: 1"] {
          pointer-events: all;
        }
        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          width: 100%;
        }
        .mobile-nav-item {
          font-size: 2rem;
          font-family: 'Outfit', sans-serif;
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 0.05em;
        }
        .mobile-language-selector {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .mobile-cv-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 80%;
          margin-top: 2rem;
        }
        .mobile-cv-buttons .nav-button {
          justify-content: center;
          padding: 1rem;
        }

        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
