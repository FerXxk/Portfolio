import { useState, useEffect } from 'react'
import './Projects.css'
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';

const Projects = () => {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const { language } = useLanguage()
    const t = translations[language].projects

    useEffect(() => {
        fetch('https://api.github.com/users/FerXxk/repos?sort=updated&per_page=6')
            .then(res => res.json())
            .then(data => {
                setRepos(data)
                setLoading(false)
            })
            .catch(err => {
                console.error('Error fetching repos:', err)
                setLoading(false)
            })
    }, [])

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text">Proyectos</span>
                </h2>

                <p className="projects-intro">
                    Explora mis proyectos en GitHub donde trabajo en robótica, automatización,
                    sistemas embebidos y desarrollo de software.
                </p>

                {loading ? (
                    <div className="loading">Cargando proyectos...</div>
                ) : (
                    <div className="projects-grid">
                        {repos.map(repo => (
                            <a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card glass"
                            >
                                <div className="project-header">
                                    <h3 className="project-title">{t.repo_names?.[repo.name] || repo.name}</h3>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </div>

                                <p className="project-description">
                                    {t.repo_descriptions?.[repo.name] || repo.description || (language === 'es' ? 'Sin descripción disponible' : 'No description available')}
                                </p>

                                <div className="project-footer">
                                    {repo.language && (
                                        <span className="project-language">
                                            <span className="language-dot"></span>
                                            {repo.language}
                                        </span>
                                    )}
                                    <span className="project-stars">
                                        ⭐ {repo.stargazers_count}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                <div className="projects-cta">
                    <a
                        href="https://github.com/FerXxk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        Ver más en GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
