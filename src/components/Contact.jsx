import './Contact.css'
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language].contact;

    const contactInfo = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            ),
            label: t.email_label,
            value: 'ferromhid@gmail.com',
            href: 'mailto:ferromhid@gmail.com'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            label: t.linkedin_label,
            value: 'fernandoromhid',
            href: 'https://www.linkedin.com/in/fernandoromhid'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-1.97c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
            ),
            label: t.github_label,
            value: 'FerXxk',
            href: 'https://github.com/FerXxk'
        }
    ]

    return (
        <>
            <p className="contact-intro">
                {t.intro}
            </p>

            <div className="contact-grid">
                {contactInfo.map((item, index) => (
                    item.href ? (
                        <a
                            key={index}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="contact-card glass"
                        >
                            <div className="contact-icon">{item.icon}</div>
                            <div className="contact-info">
                                <div className="contact-label">{item.label}</div>
                                <div className="contact-value">{item.value}</div>
                            </div>
                        </a>
                    ) : (
                        <div key={index} className="contact-card glass">
                            <div className="contact-icon">{item.icon}</div>
                            <div className="contact-info">
                                <div className="contact-label">{item.label}</div>
                                <div className="contact-value">{item.value}</div>
                            </div>
                        </div>
                    )
                ))}
            </div>

            <div className="contact-footer">
            </div>
        </>
    )
}

export default Contact
