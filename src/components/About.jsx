import './About.css'
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';

const About = () => {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-content glass">
                    <p className="about-text" dangerouslySetInnerHTML={{ __html: t.p1.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
                    <p className="about-text">{t.p2}</p>

                    <div className="about-stats">
                        <div className="stat-item">
                            <div className="stat-number gradient-text">22</div>
                            <div className="stat-label">{t.stats.age}</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number gradient-text">1+</div>
                            <div className="stat-label">{t.stats.experience}</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number gradient-text">7.5</div>
                            <div className="stat-label">{t.stats.grade}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
