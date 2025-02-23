import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import ProjectCard from './ProjectCard';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Mock API call to fetch projects
    const mockProjects = [
      { _id: '1', title: 'Project 1', description: 'Description 1' },
      { _id: '2', title: 'Project 2', description: 'Description 2' },
    ];
    setProjects(mockProjects);
  }, []);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter((project) => project._id !== projectId));
  };

  const handleEditProject = (updatedProject) => {
    setProjects(projects.map((project) => (project._id === updatedProject._id ? updatedProject : project)));
  };

  return (
    <div className="relative flex w-full pt-10">
      <Sidebar onAddProject={handleAddProject} onDeleteProject={handleDeleteProject} />
      <div className="relative flex flex-col w-3/4 ml-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 z-10">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;