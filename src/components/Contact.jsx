import './Contact.css'

const Contact = () => {
    const contactInfo = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            ),
            label: 'Email',
            value: 'ferromhid@gmail.com',
            href: 'mailto:ferromhid@gmail.com'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            ),
            label: 'Teléfono',
            value: '611467316',
            href: 'tel:+34611467316'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            ),
            label: 'Ubicación',
            value: 'Salteras, Sevilla',
            href: null
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            label: 'LinkedIn',
            value: 'fernandoromhid',
            href: 'https://www.linkedin.com/in/fernandoromhid'
        }
    ]

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text">Contacto</span>
                </h2>

                <p className="contact-intro">
                    ¿Interesado en colaborar o tienes alguna pregunta?
                    No dudes en contactarme a través de cualquiera de estos medios.
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
                    <p>© 2026 Fernando Román Hidalgo. Todos los derechos reservados.</p>
                </div>
            </div>
        </section>
    )
}

export default Contact
