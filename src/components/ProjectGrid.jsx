import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects }) => {
  const filteredProjects = projects.filter(repo => !repo.fork);

  return (
    <div className="project-list">
      {filteredProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}

      <style jsx>{`
        .project-list {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default ProjectGrid;
