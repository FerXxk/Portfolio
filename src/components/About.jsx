import './About.css'
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';

const About = ({ projectCount }) => {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <div className="about-content glass">
            <p className="about-text" dangerouslySetInnerHTML={{ __html: t.p1.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
            <p className="about-text">{t.p2}</p>

            <div className="about-stats">
                <div className="stat-item">
                    <div className="stat-number gradient-text">1+</div>
                    <div className="stat-label">{t.stats.experience}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number gradient-text">{projectCount > 0 ? projectCount : '10'}+</div>
                    <div className="stat-label">{t.stats.projects}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number gradient-text">15+</div>
                    <div className="stat-label">{t.stats.techs}</div>
                </div>
            </div>
        </div>
    )
}

export default About
