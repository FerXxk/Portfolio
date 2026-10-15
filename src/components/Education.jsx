import './Education.css'
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';

const Education = () => {
    const { language } = useLanguage();
    const t = translations[language].education;

    return (
        <div className="education-layout">
            <div className="education-column">
                <h3 className="education-heading">{t.degrees_title}</h3>
                {t.degrees.map((item, i) => (
                    <div key={i} className="education-card glass">
                        <span className="education-period">{item.period}</span>
                        <h4 className="education-degree">{item.degree}</h4>
                        <p className="education-institution">{item.institution}</p>
                        {item.details && <p className="education-details">{item.details}</p>}
                    </div>
                ))}
            </div>

            <div className="education-column">
                <h3 className="education-heading">{t.honors_title}</h3>
                {t.honors.map((item, i) => (
                    <div key={i} className="education-card glass honor">
                        <span className="education-period">★ {item.period}</span>
                        <h4 className="education-degree">{item.title}</h4>
                        <p className="education-institution">{item.details}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education
