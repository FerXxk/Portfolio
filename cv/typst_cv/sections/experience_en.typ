// CV Section: Experience
#import "../template.typ": *

#cvSection("Experience")

#resume-entry(
  title: "AI Engineer",
  location: logo-location("../images/atlantica.jpg", "Atlantica Sustainable Infrastructure | Seville, Spain"),
  date: "August 2026 - Present",
  description: "Generative AI, Agents, MCPs and Workflow Automation",
)

#resume-item[
  - *AI Workflow Automation:*
    - Design and implementation of automated workflows with n8n and language models, replacing manual processes based on Excel, email and scattered documents.
    - Automatic ingestion and processing of emails and documents (PDF, SharePoint) with structured information extraction using AI.
    - Integration of workflows with the corporate ecosystem: Microsoft 365, SharePoint, Azure DevOps and monday.com.
  - *Agents and MCPs:*
    - Development and integration of MCP (Model Context Protocol) servers to connect AI models with corporate tools and data sources.
    - Design and deployment of AI agents with Claude (Claude Managed Agents) for natural language database queries and orchestration of multiple specialized agents.
    - Prompt optimization, per-call cost control and model evaluation to balance cost and quality.
  - *AI-Assisted Development (ADLC):*
    - Software development with Claude Code following an agent development lifecycle (ADLC): specification, implementation, review and integration of each requirement.
    - Creation of Claude Code skills and subagents to automate team tasks, such as sprint planning and tracking in Azure DevOps.
    - Fullstack development of internal AI applications (FastAPI, PostgreSQL, React) and deployment to Azure Container Apps with CI/CD.
]

#resume-entry(
  title: "Software Engineer",
  location: logo-location("../images/AIRTIFICIAL.jpg", "Airtificial Aerospace & Defense | Seville, Spain"),
  date: "April 2025 - May 2026",
  description: "Fullstack Development, DevOps, Automation and Project Management",
)

#resume-item[
  - *Management and Client Relations:*
    - Project management for the development of a process automation application for a major aerospace company.
    - Direct customer interaction for requirements definition and specification.
    - Technical leadership and coordination in the development of custom solutions.
    - Application of the Agile Scrum framework integrated with Lean principles to optimize workflow and eliminate inefficiencies in development.
  - *Technical Development and Automation:*
    - Use of Git for version control in both projects.
  - *Web Application:*
    - Development of a web application with Google App Script (JavaScript, HTML, CSS) to replace obsolete Excel spreadsheets with an intelligent and automated interface.
  - *Digital Twin and Optimization Platform:*
    - Design and implementation of a digital twin for a composite material production plant, with a FastAPI and PostgreSQL backend, React frontend, deployed using Docker containers.
    - Production deployment: environment configuration, port opening, Nginx reverse proxy for traffic management, and full system commissioning.
    - Development of predictive AI models in Python for early failure detection using industrial sensor data.
    - Implementation of complex production scheduling algorithms in Python using Google OR-Tools' CP-SAT solver, with variable capacity-load constraints and custom priority weighting systems.
    - Orchestration of data pipelines and execution of AI models with Apache Airflow.
    - Integration with SAP for synchronizing master data and production planning transactions.
    - Acquisition and interpretation of data from industrial sensors to feed the digital twin and predictive models.
]
