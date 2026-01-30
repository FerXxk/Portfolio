import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar glass">
            <div className="nav-container">
                <div className="logo">FR<span>.</span></div>
                <div className="nav-links">
                    <a href="#home">Inicio</a>
                    <a href="#projects">Proyectos</a>
                    <a href="/cv_fernando_roman.tex" className="cv-btn glass">Descargar CV</a>
                </div>
            </div>

            <style jsx>{`
        .navbar {
          position: sticky;
          top: 1rem;
          margin: 0 1rem;
          padding: 0.8rem 2rem;
          z-index: 100;
          display: flex;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .nav-container {
          width: 100%;
          max-width: 1000px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
        }
        .logo span {
          color: var(--primary);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-links a {
          font-weight: 500;
          color: var(--text-muted);
        }
        .nav-links a:hover {
          color: var(--text-main);
        }
        .cv-btn {
          padding: 0.5rem 1.2rem;
          font-size: 0.9rem;
          background: var(--primary);
          color: white !important;
          border-color: transparent;
        }
        .cv-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
