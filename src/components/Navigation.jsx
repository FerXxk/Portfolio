import { useEffect, useRef, useState } from 'react'
import './Navigation.css'

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = ['hero', 'about', 'experience', 'education', 'skills', 'projects', 'contact']
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const navItems = [
        { id: 'hero', label: 'Inicio' },
        { id: 'about', label: 'Sobre Mí' },
        { id: 'experience', label: 'Experiencia' },
        { id: 'education', label: 'Educación' },
        { id: 'skills', label: 'Habilidades' },
        { id: 'projects', label: 'Proyectos' },
        { id: 'contact', label: 'Contacto' }
    ]

    return (
        <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="gradient-text">FRH</span>
                </div>

                <ul className="nav-menu">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <a
                    href="/cv_fernando_roman.pdf"
                    download
                    className="btn btn-primary nav-cta"
                >
                    Descargar CV
                </a>
            </div>
        </nav>
    )
}

export default Navigation
