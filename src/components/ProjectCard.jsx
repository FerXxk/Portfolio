import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const { name, description, html_url, language, stargazers_count } = project;

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(el,
      {
        y: 100,
        opacity: 0,
        rotateX: 10
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=100px",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div className="project-card" ref={cardRef}>
      <a href={html_url} target="_blank" rel="noreferrer" className="card-link">
        <div className="card-top">
          <span className="repo-lang">{language || "Repo"}</span>
          <span className="repo-stars">★ {stargazers_count}</span>
        </div>

        <h3 className="repo-name">{name.replace(/-/g, ' ')}</h3>
        <p className="repo-desc">{description || "Visual documentation coming soon."}</p>

        <div className="card-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </a>

      <style jsx>{`
        .project-card {
          border-bottom: 1px solid var(--glass-border);
          padding: 3rem 0;
          transition: border-color 0.3s ease;
          position: relative;
        }
        .project-card:hover {
          border-color: var(--text-main);
        }
        .card-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
        }
        .repo-name {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        .repo-desc {
          font-size: 1rem;
          color: var(--text-muted);
          max-width: 600px;
          line-height: 1.4;
        }
        .card-arrow {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          color: var(--text-muted);
          opacity: 0;
          transition: all 0.3s ease;
        }
        .project-card:hover .card-arrow {
          opacity: 1;
          transform: translateY(-50%) translate(-10px, 10px);
          color: var(--accent);
        }
        @media (max-width: 768px) {
          .repo-name { font-size: 1.8rem; }
          .card-arrow { display: none; }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
