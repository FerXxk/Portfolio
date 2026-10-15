import './FeaturedProject.css'
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';
import tfgImage from '../assets/projects/multi-energy-station-ems.webp';
import minisumoImage from '../assets/projects/Minisumo-Project.webp';

// Non-translatable details of each featured project; texts live in translations.json (featured.items)
const PROJECTS = {
    'multi-energy-station-ems': {
        image: tfgImage,
        fit: 'contain',
        tags: ['MATLAB / Simulink', 'Python', 'LSTM', 'EMS', 'Typst'],
        doc: 'memoria/main.pdf',
    },
    'Minisumo-Project': {
        image: minisumoImage,
        fit: 'cover',
        tags: ['C++', 'Arduino', '3D CAD', 'PCB', 'Control'],
        doc: 'Minisumo/Documentation/Technical_Data_Sheet_ElDiabloJD.pdf',
    },
};

export const FEATURED_REPOS = Object.keys(PROJECTS);

const FeaturedProject = () => {
    const { language } = useLanguage();
    const t = translations[language].featured;

    return t.items.map((item, index) => {
        const project = PROJECTS[item.repo];
        const repoUrl = `https://github.com/FerXxk/${item.repo}`;

        return (
            <article key={item.repo} className={`featured glass ${index % 2 ? 'reverse' : ''}`}>
                <div
                    className={`featured-image ${project.fit}`}
                    style={{ backgroundImage: `url(${project.image})` }}
                    role="img"
                    aria-label={item.title}
                ></div>

                <div className="featured-body">
                    <span className="featured-label">{item.label}</span>
                    <h3 className="featured-title">{item.title}</h3>
                    <span className="featured-grade">★ {item.badge}</span>

                    <p className="featured-desc">{item.description}</p>

                    <div className="featured-stats">
                        {item.stats.map((stat, i) => (
                            <div key={i} className="featured-stat">
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="featured-tags">
                        {project.tags.map(tag => <span key={tag} className="featured-tag">{tag}</span>)}
                    </div>

                    <div className="featured-actions">
                        <a href={repoUrl} target="_blank" rel="noreferrer" className="featured-btn primary">
                            {t.repo_link}
                        </a>
                        <a href={`${repoUrl}/blob/main/${project.doc}`} target="_blank" rel="noreferrer" className="featured-btn">
                            {item.doc}
                        </a>
                    </div>
                </div>
            </article>
        );
    });
}

export default FeaturedProject
