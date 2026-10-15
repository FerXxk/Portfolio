import './FeaturedProject.css'
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';
import image from '../assets/projects/multi-energy-station-ems.png';

export const FEATURED_REPO = 'multi-energy-station-ems';
const REPO_URL = `https://github.com/FerXxk/${FEATURED_REPO}`;
const TAGS = ['MATLAB / Simulink', 'Python', 'LSTM', 'EMS', 'Typst'];

const FeaturedProject = () => {
    const { language } = useLanguage();
    const t = translations[language].featured;

    return (
        <article className="featured glass">
            <div className="featured-image" style={{ backgroundImage: `url(${image})` }} role="img" aria-label={t.title}></div>

            <div className="featured-body">
                <span className="featured-label">{t.label}</span>
                <h3 className="featured-title">{t.title}</h3>
                <span className="featured-grade">★ {t.grade}</span>

                <p className="featured-desc">{t.description}</p>

                <div className="featured-stats">
                    {t.stats.map((stat, i) => (
                        <div key={i} className="featured-stat">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className="featured-tags">
                    {TAGS.map(tag => <span key={tag} className="featured-tag">{tag}</span>)}
                </div>

                <div className="featured-actions">
                    <a href={REPO_URL} target="_blank" rel="noreferrer" className="featured-btn primary">
                        {t.repo}
                    </a>
                    <a href={`${REPO_URL}/blob/main/memoria/main.pdf`} target="_blank" rel="noreferrer" className="featured-btn">
                        {t.report}
                    </a>
                </div>
            </div>
        </article>
    )
}

export default FeaturedProject
