import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programación',
            skills: ['C', 'C++', 'Python', 'MATLAB', 'Simulink', 'ROS', 'JavaScript', 'VBA', 'HTML', 'CSS', 'SQL']
        },
        {
            title: 'Electrónica',
            skills: ['Electrónica Digital', 'Electrónica Analógica', 'MSP430', 'ESP32', 'Arduino', 'FPGA', 'Automatización', 'Control']
        },
        {
            title: 'Simulación & Control',
            skills: ['Modelado de Sistemas', 'Control PID', 'Sistemas Embebidos']
        },
        {
            title: 'DevOps & Sistemas',
            skills: ['Docker', 'Linux', 'Git', 'CI/CD']
        },
        {
            title: 'Redes & Comunicaciones',
            skills: ['TCP/IP', 'MQTT', 'CAN Bus']
        },
        {
            title: 'Diseño 3D',
            skills: ['Fusion 360', 'FreeCAD']
        }
    ]

    const softSkills = [
        'Liderazgo Técnico',
        'Trabajo en Equipo',
        'Comunicación Efectiva',
        'Resolución de Problemas',
        'Pensamiento Analítico',
        'Organización',
        'Adaptabilidad',
        'Aprendizaje Rápido',
        'Creatividad',
        'Innovación'
    ]

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text">Habilidades</span>
                </h2>

                <div className="skills-container">
                    <div className="skills-section">
                        <h3 className="skills-subtitle">Habilidades Técnicas</h3>
                        <div className="skills-grid">
                            {skillCategories.map((category, index) => (
                                <div key={index} className="skill-category glass">
                                    <h4 className="category-title">{category.title}</h4>
                                    <div className="skill-tags">
                                        {category.skills.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-section">
                        <h3 className="skills-subtitle">Habilidades Blandas</h3>
                        <div className="soft-skills-grid">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="soft-skill-item glass">
                                    <span className="soft-skill-icon">✓</span>
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
