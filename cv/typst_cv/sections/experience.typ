// CV Section: Experiencia Profesional
#import "../template.typ": *

#cvSection("Experiencia Profesional")

#resume-entry(
  title: "Ingeniero de Software",
  location: logo-location("../images/AIRTIFICIAL.jpg", "Airtificial Aerospace & Defense | Sevilla, España"),
  date: "Abril 2025 - Mayo 2026",
  description: "Desarrollo Fullstack, DevOps, Automatización y Gestión de Proyectos",
)

#resume-item[
  - *Gestión y Relaciones con el Cliente:*
    - Gestión de proyecto para el desarrollo de una aplicación de automatización de procesos para una importante empresa del sector aeroespacial.
    - Interlocución directa con el cliente para la definición y especificación de requisitos.
    - Liderazgo técnico y coordinación en el desarrollo de soluciones a medida.
    - Aplicación del marco ágil Scrum integrado con principios Lean para optimizar el flujo de trabajo y eliminar ineficiencias en el desarrollo.
  - *Desarrollo Técnico y Automatización:*
    - Uso de Git para el control de versiones en ambos proyectos.
  - *Aplicación Web:*
    - Desarrollo de una aplicación con Google App Script (JavaScript, HTML, CSS) para sustituir hojas de cálculo Excel obsoletas por una interfaz inteligente y automatizada.
  - *Gemelo Digital y Plataforma de Optimización:*
    - Diseño e implementación de un gemelo digital para una planta de producción de materiales compuestos, con backend en FastAPI y PostgreSQL, frontend en React, y desplegado mediante contenedores Docker.
    - Despliegue en producción: configuración del entorno, apertura de puertos, proxy inverso con Nginx para gestión de tráfico y puesta en marcha del sistema completo.
    - Desarrollo de modelos predictivos de IA en Python para detección temprana de fallos a partir de datos de sensores industriales.
    - Implementación de complejos algoritmos de optimización de la producción (scheduling) en Python mediante el solver CP-SAT de Google OR-Tools, con restricciones de capacidad-carga variables y sistemas de prioridades personalizadas.
    - Orquestación de pipelines de datos y ejecución de modelos de IA con Apache Airflow.
    - Integración con SAP para sincronización de datos maestros y transacciones del sistema de planificación de la producción.
    - Adquisición e interpretación de datos provenientes de sensores industriales para alimentar el gemelo digital y los modelos predictivos.
]
