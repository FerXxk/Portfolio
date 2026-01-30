import React, { useEffect, useState, useRef } from 'react';
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
import Contact from './components/Contact';
import config from './config';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

const AppContent = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Fetch GitHub Repos
    fetch('https://api.github.com/users/FerXxk/repos?sort=updated&per_page=12')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Filter excluded repos
          const filteredData = data.filter(repo => !config.excludedRepos.includes(repo.name));

          // Sort by config settings
          const sortedData = filteredData.sort((a, b) => {
            const field = config.repoSorting.field;
            const direction = config.repoSorting.direction === 'asc' ? 1 : -1;

            let valA, valB;
            if (field === 'stars') {
              valA = a.stargazers_count;
              valB = b.stargazers_count;
            } else if (field === 'updated') {
              valA = new Date(a.pushed_at);
              valB = new Date(b.pushed_at);
            } else if (field === 'created') {
              valA = new Date(a.created_at);
              valB = new Date(b.created_at);
            } else if (field === 'name') {
              valA = a.name.toLowerCase();
              valB = b.name.toLowerCase();
            }

            if (valA < valB) return -1 * direction;
            if (valA > valB) return 1 * direction;
            return 0;
          });
          setProjects(sortedData);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching repos:", err);
        setLoading(false);
      });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  return (
    <div className="visual-lab" ref={mainRef}>
      <CustomCursor />
      <Navbar />

      <main className="container">
        <Hero />

        <section id="about-section">
          <div className="section-header">
            <span className="section-number">01.</span>
            <h2 className="section-title">{t.about.title}</h2>
          </div>
          <About />
        </section>

        <section id="projects" className="projects-section">
          <div className="section-header">
            <span className="section-number">02.</span>
            <h2 className="section-title">{t.projects.title}</h2>
          </div>

          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>{t.projects.loading}</p>
            </div>
          ) : projects.length > 0 ? (
            <ProjectGrid projects={projects} />
          ) : (
            <div className="loading-state">
              <p>{t.projects.no_projects}</p>
            </div>
          )}
        </section>

        <section id="contact-section">
          <div className="section-header">
            <span className="section-number">03.</span>
            <h2 className="section-title">{t.contact.title}</h2>
          </div>
          <Contact />
        </section>
      </main>

      <footer className="lab-footer">
        <div className="container footer-content">
          <p className="copyright">© {new Date().getFullYear()} Fernando Román Hidalgo | {t.footer.rights}</p>
        </div>
      </footer>

      <style jsx>{`
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
        .spinner {
          width: 40px;
          height: 40px;
          border: 2px solid var(--glass-border);
          border-top-color: var(--accent);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
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
