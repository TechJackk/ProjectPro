import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleViewTasks = (e) => {
    e.stopPropagation();
    navigate(`/${project._id}`);
  };

  return (
    <div className="project-card p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300" onClick={handleViewTasks}>
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="project-actions flex justify-center">
        <button className="text-blue-500 hover:text-blue-700" onClick={handleViewTasks}>View Tasks</button>
      </div>
    </div>
  );
};

export default ProjectCard;