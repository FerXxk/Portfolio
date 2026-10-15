// CV Section: Experiencia Profesional
#import "../template.typ": *

#cvSection("Experiencia Profesional")

#resume-entry(
  title: "Ingeniero de IA",
  location: logo-location("../images/atlantica.png", "Atlantica Sustainable Infrastructure | Sevilla, España"),
  date: "Agosto 2026 - Actualidad",
  description: "IA Generativa, Agentes, MCPs y Automatización de Workflows",
)

#resume-item[
  - *Automatización de Workflows con IA:*
    - Diseño e implementación de workflows automatizados con n8n y modelos de lenguaje que sustituyen procesos manuales basados en Excel, correo y documentos dispersos.
    - Ingesta y procesamiento automático de correos y documentos (PDF, SharePoint) con extracción de información estructurada mediante IA.
    - Integración de los flujos con el ecosistema corporativo: Microsoft 365, SharePoint, Azure DevOps y monday.com.
  - *Agentes y MCPs:*
    - Desarrollo e integración de servidores MCP (Model Context Protocol) para conectar los modelos de IA con herramientas y fuentes de datos corporativas.
    - Diseño y despliegue de agentes de IA con Claude (Claude Managed Agents) para consultas en lenguaje natural sobre bases de datos y orquestación de varios agentes especializados.
    - Optimización de prompts, control del coste por llamada y evaluación de modelos para equilibrar coste y calidad.
  - *Desarrollo Asistido por IA (ADLC):*
    - Desarrollo de software con Claude Code siguiendo un ciclo de vida para agentes (ADLC): especificación, implementación, revisión e integración de cada requisito.
    - Creación de skills y subagentes de Claude Code para automatizar tareas del equipo, como la planificación y el seguimiento de sprints en Azure DevOps.
    - Desarrollo fullstack de aplicaciones internas con IA (FastAPI, PostgreSQL, React) y despliegue en Azure Container Apps con CI/CD.
]

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
