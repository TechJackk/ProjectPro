import React from 'react';

const ProjectCard = ({ project, onEdit, onDelete, onSelect }) => (
  <div className="project-card" onClick={() => onSelect(project.id)}>
    <img src="/image/project.svg" alt="Project" className="project-img" />
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <div className="project-actions">
      <button onClick={(e) => { e.stopPropagation(); onEdit(project); }}>Edit</button>
      <button onClick={(e) => { e.stopPropagation(); onDelete(project.id); }}>Delete</button>
    </div>
  </div>
);

export default ProjectCard;