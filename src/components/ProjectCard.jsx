import React from 'react';

const ProjectCard = ({ project, index }) => {
    const { name, description, html_url, language, stargazers_count, topics } = project;

    return (
        <div className="project-card glass animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="card-header">
                <div className="repo-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </div>
                <div className="stars">
                    ⭐ {stargazers_count}
                </div>
            </div>

            <h3 className="project-name">{name.replace(/-/g, ' ')}</h3>
            <p className="project-description">
                {description || "Sin descripción disponible para este proyecto de GitHub."}
            </p>

            <div className="card-footer">
                <div className="language">
                    <span className="dot" style={{ backgroundColor: getLanguageColor(language) }}></span>
                    {language || "N/A"}
                </div>
                <a href={html_url} target="_blank" rel="noopener noreferrer" className="view-link">
                    Ver Repo →
                </a>
            </div>

            <style jsx>{`
        .project-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: default;
        }
        .project-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          background: rgba(59, 130, 246, 0.05);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          color: var(--primary);
        }
        .stars {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .project-name {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          text-transform: capitalize;
        }
        .project-description {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          border-top: 1px solid var(--glass-border);
        }
        .language {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .view-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--primary);
        }
        .view-link:hover {
          color: var(--text-main);
          transform: translateX(5px);
        }
      `}</style>
        </div>
    );
};

const getLanguageColor = (lang) => {
    const colors = {
        'C++': '#f34b7d',
        'Python': '#3572A5',
        'JavaScript': '#f1e05a',
        'MATLAB': '#e16737',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'VHDL': '#adb2cb',
        'C': '#555555'
    };
    return colors[lang] || '#8b949e';
};

export default ProjectCard;
