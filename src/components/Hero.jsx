import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for title
      gsap.from(".char", {
        y: 100,
        opacity: 0,
        rotateX: -90,
        stagger: 0.02,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5
      });

      // Reveal subtitle
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.2
      });

      // Badges animation
      gsap.from(".hero-badge", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 1.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="char"
        style={{
          display: 'inline-block',
          marginRight: char === " " ? "0.3em" : "0"
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section id="home" className="hero-section" ref={containerRef}>
      <div className="hero-content">
        <div className="title-wrapper overflow-hidden">
          <h1 className="hero-title" ref={titleRef}>
            {splitText("Fernando")}
          </h1>
        </div>
        <div className="title-wrapper overflow-hidden">
          <h1 className="hero-title highlight">
            {splitText("Román Hidalgo")}
          </h1>
        </div>

        <p className="hero-subtitle" ref={subtitleRef}>
          {t.hero.title} <span>/</span> {t.hero.subtitle}
        </p>

        <div className="hero-footer">
          <div className="badges-grid">
            {t.hero.badges.map((badge, index) => (
              <span key={index} className="hero-badge">{badge}</span>
            ))}
          </div>
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <span>{t.hero.scroll}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        .hero-title {
          font-size: clamp(2.5rem, 8vw, 6rem);
          line-height: 0.9;
          text-transform: uppercase;
        }
        .highlight {
          color: transparent;
          -webkit-text-stroke: 1.5px var(--text-muted);
          opacity: 0.8;
        }
        .hero-subtitle {
          margin-top: 2rem;
          font-size: clamp(0.9rem, 1.8vw, 1.25rem);
          color: var(--text-muted);
          max-width: 1000px;
          font-weight: 400;
          white-space: nowrap;
        }
        .hero-subtitle span {
          color: var(--accent);
          padding: 0 0.5rem;
        }
        .hero-footer {
          margin-top: 6rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
        }
        .badges-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .hero-badge {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          font-weight: 600;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 0.2rem;
          width: fit-content;
        }
        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--text-muted);
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .mouse {
          width: 20px;
          height: 35px;
          border: 1px solid var(--text-muted);
          border-radius: 20px;
          display: flex;
          justify-content: center;
          padding-top: 5px;
        }
        .wheel {
          width: 2px;
          height: 6px;
          background: var(--accent);
          border-radius: 2px;
          animation: mouse-scroll 1.5s infinite;
        }
        @keyframes mouse-scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        @media (max-width: 768px) {
          .hero-footer { flex-direction: column; align-items: flex-start; gap: 4rem; }
          .hero-subtitle { white-space: normal; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
