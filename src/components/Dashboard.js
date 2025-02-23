import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

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

  return (
    <div className="flex w-full pt-10">
      <Sidebar onAddProject={handleAddProject} onDeleteProject={handleDeleteProject} />
      <div className="flex flex-col items-center justify-center w-3/4">
        <div className="w-full max-w-2xl px-4">
          {projects.map((project) => (
            <Card key={project._id} className="mb-3 shadow-sm w-full">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Link to={`/${project._id}`}>
                  <Button variant="primary">View Project</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <img src="/image/welcome.svg" className="w-full max-w-xs" alt="Welcome" />
          <h1 className="text-lg text-gray-600 mt-4">Select or create a new project</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;