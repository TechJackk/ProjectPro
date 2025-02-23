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
    <div className="relative flex w-full pt-10">
      <Sidebar onAddProject={handleAddProject} onDeleteProject={handleDeleteProject} />
      <div className="relative flex flex-col w-3/4 ml-4">
        <div className="w-full px-4 z-10">
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
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-end pr-10">
          <img src="/image/welcome.svg" className="w-3/4 max-w-2xl opacity-20" alt="Welcome" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;