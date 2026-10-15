import './Experience.css'
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';

const Experience = () => {
    const { language } = useLanguage();
    const t = translations[language].experience;

    return (
        <div className="timeline">
            {t.jobs.map((job, index) => (
                <article key={index} className="timeline-item glass">
                    <div className="timeline-marker"></div>
                    <div className="timeline-header">
                        <div>
                            <h3 className="timeline-title">{job.position}</h3>
                            <h4 className="timeline-company">{job.company}</h4>
                        </div>
                        <span className="timeline-period">{job.period}</span>
                    </div>
                    <p className="timeline-summary">{job.summary}</p>
                    <ul className="timeline-list">
                        {job.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                    <div className="timeline-tags">
                        {job.tags.map((tag, i) => (
                            <span key={i} className="timeline-tag">{tag}</span>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Experience
