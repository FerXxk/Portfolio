import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].projects;

  // Dynamic image loading using import.meta.glob
  const projectImages = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });

  // Helper to find image for project
  const getProjectImage = (projectName) => {
    const normalizedName = projectName.toLowerCase();
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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const Modal = () => createPortal(
    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="modal-content" onClick={e => e.stopPropagation()} data-lenis-prevent>
        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>

        <div className="modal-image" style={{ backgroundImage: `url(${bgImage})` }}></div>

        <div className="modal-info">
          <h2>{t.repo_names?.[project.name] || project.name}</h2>

          <div className="modal-meta">
            {project.topics && project.topics.length > 0 && project.topics.map((topic, i) => (
              <span key={i} className="tag">{topic}</span>
            ))}
            <span className="tag">★ {project.stargazers_count}</span>
          </div>

          <p className="modal-desc">
            {t.repo_descriptions?.[project.name] || project.description || (language === 'es' ? "Sin descripción disponible." : "No description available.")}
          </p>

          <div className="modal-actions">
            <a
              href={`https://github.com/FerXxk/${project.name}/blob/${project.default_branch || 'main'}/README.md`}
              target="_blank"
              rel="noreferrer"
              className="view-more-btn"
            >
              {t.view_more}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href={project.html_url} target="_blank" rel="noreferrer" className="view-repo-btn">
              {t.view_repo}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          animation: fadeIn 0.3s ease;
        }
        .modal-content {
          background: #111;
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: all 0.2s;
        }
        .close-btn:hover { background: var(--accent); transform: rotate(90deg); }

        .modal-image {
          width: 100%;
          aspect-ratio: 16 / 9;
          background-size: cover;
          background-position: center;
          border-bottom: 1px solid var(--glass-border);
        }
        .modal-info {
          padding: 2.5rem;
        }
        .modal-info h2 {
          font-size: 2.5rem;
          margin: 0 0 1rem 0;
          text-transform: uppercase;
          font-weight: 800;
        }
        .modal-meta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .tag {
          background: rgba(255,255,255,0.1);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .modal-desc {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .view-repo-btn, .view-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.2s;
          font-size: 0.9rem;
        }
        .view-repo-btn {
          background: var(--accent);
          color: #000;
        }
        .view-more-btn {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid var(--glass-border);
        }
        .view-repo-btn:hover, .view-more-btn:hover { 
          transform: translateY(-2px);
          filter: brightness(1.2);
        }
        .view-more-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--accent);
        }
        .view-repo-btn svg, .view-more-btn svg { width: 18px; height: 18px; }

        @media (max-width: 768px) {
          .modal-info h2 { font-size: 1.8rem; }
          .modal-image { height: 200px; }
          .modal-info { padding: 1.5rem; }
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>,
    document.body
  );

  return (
    <>
      <div
        className="project-card"
        ref={cardRef}
        onClick={() => setIsOpen(true)}
      >
        <div
          className="card-bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="card-overlay"></div>

        <div className="card-content">
          <div className="card-top">
            <span className="project-index">{(index + 1).toString().padStart(2, '0')}</span>
            <h3 className="project-name">{t.repo_names?.[project.name] || project.name}</h3>
          </div>

          <div className="card-hint">
            <span className="star-count">★ {project.stargazers_count}</span>
            <span className="plus-icon">+</span>
          </div>
        </div>

        <style jsx>{`
          .project-card {
            position: relative;
            display: block;
            height: 350px;
            border-radius: 12px;
            overflow: hidden;
            text-decoration: none;
            color: white;
            background: #111;
            border: 1px solid var(--glass-border);
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .project-card:hover { 
            border-color: var(--accent);
            transform: translateY(-5px);
          }

          .card-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            opacity: 0.7;
          }
          .project-card:hover .card-bg { transform: scale(1.05); opacity: 0.9; }

          .card-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
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
            font-size: 1.5rem;
            font-weight: 800;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: -0.02em;
          }

          .card-hint {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .star-count {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--text-muted);
            background: rgba(255,255,255,0.05);
            padding: 0.3rem 0.8rem;
            border-radius: 100px;
            border: 1px solid var(--glass-border);
          }
          .plus-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid var(--glass-border);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: var(--accent);
            transition: all 0.3s ease;
          }
          .project-card:hover .plus-icon {
            background: var(--accent);
            color: black;
            border-color: var(--accent);
          }

          @media (max-width: 480px) {
            .project-card { height: 300px; }
            .project-name { font-size: 1.2rem; }
          }
        `}</style>
      </div>
      {isOpen && <Modal />}
    </>
  );
};

export default ProjectCard;
