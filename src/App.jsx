import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';

function App() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/FerXxk/repos?sort=updated&per_page=12')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setProjects(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching repos:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="app-container">
            <div className="bg-glow"></div>
            <Navbar />
            <main className="container">
                <Hero />
                <section id="projects">
                    <h2 className="section-title">Proyectos Destacados</h2>
                    {loading ? (
                        <div className="loading">Cargando proyectos de GitHub...</div>
                    ) : (
                        <ProjectGrid projects={projects} />
                    )}
                </section>
            </main>
            <footer className="footer glass">
                <p>&copy; {new Date().getFullYear()} Fernando Román Hidalgo. Hecho con React & ❤️</p>
            </footer>

            <style jsx>{`
        .app-container {
          position: relative;
          z-index: 1;
        }
        .bg-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
          z-index: -1;
          pointer-events: none;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          background: linear-gradient(to right, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .loading {
          text-align: center;
          padding: 4rem;
          font-size: 1.2rem;
          color: var(--text-muted);
        }
        .footer {
          padding: 2rem;
          text-align: center;
          margin-top: auto;
          border-radius: 0;
          border-left: none;
          border-right: none;
          border-bottom: none;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
      `}</style>
        </div>
    );
}

export default App;
