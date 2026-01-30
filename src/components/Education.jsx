import './Education.css'

const Education = () => {
    const education = [
        {
            degree: 'Máster en Ingeniería Electrónica, Robótica y Automatización',
            institution: 'Universidad de Sevilla',
            period: '2025 - 2026',
            details: ''
        },
        {
            degree: 'Grado en Ingeniería Electrónica, Robótica y Mecatrónica',
            institution: 'Universidad de Sevilla',
            period: '2021 - 2025',
            details: 'Nota media: 7.5'
        },
        {
            degree: 'Bachillerato Tecnológico',
            institution: 'IES Heliche',
            period: '2019 - 2021',
            details: 'Matrícula de honor'
        },
        {
            degree: 'Curso de Python Avanzado',
            institution: 'Idexa',
            period: '2025',
            details: ''
        }
    ]

    return (
        <section id="education" className="education section">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text">Educación</span>
                </h2>

                <div className="education-grid">
                    {education.map((item, index) => (
                        <div key={index} className="education-card glass">
                            <div className="education-icon">🎓</div>
                            <h3 className="education-degree">{item.degree}</h3>
                            <h4 className="education-institution">{item.institution}</h4>
                            <p className="education-period">{item.period}</p>
                            {item.details && <p className="education-details">{item.details}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
