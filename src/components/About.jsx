import './About.css'
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';

const About = () => {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <div className="about-content glass">
            <p className="about-text" dangerouslySetInnerHTML={{ __html: t.p1.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
            <p className="about-text">{t.p2}</p>

            <div className="about-tech-stack">
                <h3 className="tech-title">{t.tech_title}</h3>
                <div className="tech-grid">
                    {t.tech_categories.map((category, idx) => (
                        <div key={idx} className="tech-category">
                            <h4 className="category-name">{category.name}</h4>
                            <ul className="tech-list">
                                {category.items.map((item, i) => (
                                    <li key={i} className="tech-item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
