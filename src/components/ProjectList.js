import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects, onEdit, onDelete, onSelect }) => (
  <div className="project-list">
    {projects.map((project) => (
      <ProjectCard
        key={project.id}
        project={project}
        onEdit={onEdit}
        onDelete={onDelete}
        onSelect={onSelect}
      />
    ))}
  </div>
);

export default ProjectList;