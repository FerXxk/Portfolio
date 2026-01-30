import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero animate-fade-in">
            <div className="hero-content">
                <h1 className="hero-title">
                    Fernando Román <span className="highlight">Hidalgo</span>
                </h1>
                <p className="hero-subtitle">
                    Ingeniero de Robótica | Especialista en Automatización y Software Embebido
                </p>
                <div className="hero-badges">
                    <span className="badge glass">C++</span>
                    <span className="badge glass">Python</span>
                    <span className="badge glass">ROS</span>
                    <span className="badge glass">Docker</span>
                    <span className="badge glass">IA</span>
                </div>
                <div className="hero-cta">
                    <a href="#projects" className="btn-primary">Ver Proyectos</a>
                    <a href="https://github.com/FerXxk" target="_blank" rel="noopener noreferrer" className="btn-secondary glass">GitHub Profile</a>
                </div>
            </div>

            <style jsx>{`
        .hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .hero-content {
          max-width: 800px;
        }
        .hero-title {
          font-size: 4.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        .highlight {
          color: var(--primary);
          position: relative;
        }
        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          font-weight: 300;
        }
        .hero-badges {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .badge {
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent);
          border-radius: 99px;
        }
        .hero-cta {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          background: var(--primary-hover);
        }
        .btn-secondary {
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-subtitle { font-size: 1.2rem; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
