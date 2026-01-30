import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language].projects;

  // Dynamic image loading using import.meta.glob
  const projectImages = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });

  // Helper to find image for project
  const getProjectImage = (projectName) => {
    // Normalize project name for matching (optional, but good for safety)
    const normalizedName = projectName.toLowerCase();

    // Find matching path in glob results
    const imagePath = Object.keys(projectImages).find(path => {
      const fileName = path.split('/').pop().split('.')[0].toLowerCase();
      return fileName === normalizedName;
    });

    return imagePath ? projectImages[imagePath] : null;
  };

  const localImage = getProjectImage(project.name);

  const backgrounds = [
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'
  ];

  // Use local image if found, otherwise fallback
  const bgImage = localImage || backgrounds[index % backgrounds.length];

  useEffect(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noreferrer"
      className="project-card"
      ref={cardRef}
    >
      <div
        className="card-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="card-overlay"></div>

      <div className="card-content">
        <div className="card-top">
          <span className="project-index">{(index + 1).toString().padStart(2, '0')}</span>
          <h3 className="project-name">{project.name}</h3>
        </div>

        <p className="project-desc">
          {project.description || (language === 'es' ? "Sin descripción disponible." : "No description available.")}
        </p>

        <div className="card-bottom">
          <div className="project-meta">
            {project.language && <span className="meta-item">{project.language}</span>}
            <span className="meta-item">★ {project.stargazers_count}</span>
          </div>
          <div className="card-link">
            {t.view_repo}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          position: relative;
          display: block;
          height: 450px;
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
          color: white;
          background: #111;
          border: 1px solid var(--glass-border);
          transition: border-color 0.3s ease;
        }
        .project-card:hover { border-color: var(--accent); }

        .card-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0.4;
        }
        .project-card:hover .card-bg { transform: scale(1.05); opacity: 0.6; }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.9) 100%);
        }

        .card-content {
          position: relative;
          z-index: 10;
          height: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-top {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .project-index {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 700;
          letter-spacing: 0.1em;
        }
        .project-name {
          font-size: 1.8rem;
          font-weight: 800;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .project-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.7);
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .project-meta {
          display: flex;
          gap: 1.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .card-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--primary);
        }
        .card-link svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s ease;
        }
        .project-card:hover .card-link svg { transform: translate(3px, -3px); }

        @media (max-width: 480px) {
          .project-card { height: 300px; }
          .project-name { font-size: 1.5rem; }
        }
      `}</style>
    </a>
  );
};

export default ProjectCard;
