import './Experience.css'

const Experience = () => {
    const experience = {
        company: 'Airtificial Aerospace & Defense',
        position: 'Ingeniero de Software',
        period: 'Abril 2025 - Actualidad',
        responsibilities: [
            'Gestión de proyecto para el desarrollo de una aplicación de automatización de procesos para una importante empresa del sector aeroespacial',
            'Desarrollo Fullstack, aplicando buenas prácticas de programación, eficiencia y organización',
            'Desarrollo de un gemelo digital para una planta de producción de materiales compuestos',
            'Integración y despliegue de software mediante contenedores Docker',
            'Automatización y orquestación de tareas con Apache Airflow',
            'Desarrollo de modelos de IA para detección temprana de fallos',
            'Implementación de algoritmo de planificación basado en CP-SAT'
        ]
    }

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text">Experiencia</span>
                </h2>

                <div className="timeline">
                    <div className="timeline-item glass">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3 className="timeline-title">{experience.position}</h3>
                                <span className="timeline-period">{experience.period}</span>
                            </div>
                            <h4 className="timeline-company">{experience.company}</h4>
                            <ul className="timeline-list">
                                {experience.responsibilities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
