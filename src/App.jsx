import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import CustomCursor from './components/CustomCursor';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import translations from './translations.json';
import About from './components/About';
import Experience from './components/Experience';
import FeaturedProject, { FEATURED_REPOS } from './components/FeaturedProject';
import Education from './components/Education';
import Contact from './components/Contact';
import config from './config';
import repos from './data/repos.json';

gsap.registerPlugin(ScrollTrigger);

// Position in config.repoOrder; unlisted repos go last
const orderOf = (repo) => {
  const index = config.repoOrder.indexOf(repo.name);
  return index === -1 ? Infinity : index;
};

// Repos are snapshotted at build time (scripts/build_repos.js), so no request is made from the browser
const projects = repos
  .filter(repo => !config.excludedRepos.includes(repo.name) && !FEATURED_REPOS.includes(repo.name))
  .sort((a, b) => (orderOf(a) - orderOf(b)) || (new Date(b.pushed_at) - new Date(a.pushed_at)));

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

const Section = ({ id, number, title, children, className }) => (
  <section id={id} className={className}>
    <div className="section-header">
      <span className="section-number">{number}</span>
      <h2 className="section-title">{title}</h2>
    </div>
    {children}
  </section>
);

const AppContent = () => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // No smooth scrolling for users who asked for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Lenis smooth scrolling, driven only by GSAP's ticker so it runs once per frame
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="visual-lab">
      <CustomCursor />
      <Navbar />

      <main className="container">
        <Hero />

        <Section id="about-section" number="01." title={t.about.title}>
          <About />
        </Section>

        <Section id="experience-section" number="02." title={t.experience.title}>
          <Experience />
        </Section>

        <Section id="projects" number="03." title={t.projects.title} className="projects-section">
          <FeaturedProject />
          {projects.length > 0 ? (
            <ProjectGrid projects={projects} />
          ) : (
            <div className="loading-state">
              <p>{t.projects.no_projects}</p>
            </div>
          )}
        </Section>

        <Section id="education-section" number="04." title={t.education.title}>
          <Education />
        </Section>

        <Section id="contact-section" number="05." title={t.contact.title}>
          <Contact />
        </Section>
      </main>

      <footer className="lab-footer">
        <div className="container footer-content">
          <p className="copyright">© {new Date().getFullYear()} Fernando Román Hidalgo | {t.footer.rights}</p>
        </div>
      </footer>

      <style>{`
        .visual-lab {
          background-color: var(--bg-dark);
          min-height: 100vh;
          position: relative;
        }
        .section-header {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          margin-bottom: 4rem;
        }
        .section-number {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          color: var(--accent);
          font-weight: 600;
        }
        .section-title {
          font-size: clamp(2rem, 5vw, 4rem);
          text-transform: uppercase;
        }
        .loading-state {
          height: 40vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          color: var(--text-muted);
        }
        .lab-footer {
          padding: 4rem 0;
          border-top: 1px solid var(--glass-border);
          margin-top: 4rem;
        }
        .footer-content {
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--text-muted);
          font-size: 0.9rem;
          text-align: center;
        }
        .footer-links {
          display: flex;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
