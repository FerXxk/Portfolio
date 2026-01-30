import './About.css'

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text">Sobre Mí</span>
                </h2>

                <div className="about-content glass">
                    <p className="about-text">
                        Ingeniero con experiencia profesional en el desarrollo de soluciones tecnológicas,
                        actualmente en activo y finalizando estudios de posgrado. Mi objetivo es consolidar
                        un plan de carrera ambicioso, con especial interés en la <strong>automatización</strong> y
                        el <strong>software embebido</strong>, manteniéndome abierto a participar en proyectos de
                        diversa índole que supongan un reto técnico y profesional.
                    </p>
                    <p className="about-text">
                        Me motiva formar parte de entornos dinámicos, innovadores y colaborativos, donde
                        pueda continuar ampliando mis competencias y aportar valor real al equipo y a la
                        organización mediante una mejora continua.
                    </p>

                    <div className="about-stats">
                        <div className="stat-item">
                            <div className="stat-number gradient-text">22</div>
                            <div className="stat-label">Años</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number gradient-text">1+</div>
                            <div className="stat-label">Años de Experiencia</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number gradient-text">7.5</div>
                            <div className="stat-label">Nota Media</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
