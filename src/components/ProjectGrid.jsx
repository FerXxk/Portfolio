import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects }) => {
    const filteredProjects = projects.filter(repo => !repo.fork);

    return (
        <div className="project-grid">
            {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}

            <style jsx>{`
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          padding-bottom: 4rem;
        }
        @media (max-width: 480px) {
          .project-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default ProjectGrid;
