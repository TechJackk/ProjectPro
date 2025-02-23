import React, { useCallback, useEffect, useState } from 'react';
import AddProjectModal from './AddProjectModal';
import EditProjectModal from './EditProjectModal';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Gear } from 'react-bootstrap-icons';

const Sidebar = ({ onAddProject, onDeleteProject }) => {
  const [isModalOpen, setModalState] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [paramsWindow, setParamsWindow] = useState(window.location.pathname.slice(1));
  const navigate = useNavigate();

  useEffect(() => {
    // Mock API call to fetch projects
    const mockProjects = [
      { _id: '1', title: 'Project 1', description: 'Description 1' },
      { _id: '2', title: 'Project 2', description: 'Description 2' },
    ];
    setProjects(mockProjects);

    document.addEventListener('projectUpdate', ({ detail }) => {
      setProjects((prevProjects) => [...prevProjects, detail]);
    });

    return () => {
      document.removeEventListener('projectUpdate', {}, false);
    };
  }, []);

  const handleLocation = (e, projectId) => {
    e.preventDefault();
    setParamsWindow(projectId);
    navigate(`/${projectId}`);
  };

  const openModal = useCallback(() => {
    setModalState(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalState(false);
  }, []);

  const addProjectToList = (newProject) => {
    setProjects([...projects, newProject]);
    onAddProject(newProject);
  };

  const openEditModal = (project) => {
    setSelectedProject(project);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setSelectedProject(null);
  };

  const editProject = (updatedProject) => {
    setProjects(projects.map((project) => (project._id === updatedProject._id ? updatedProject : project)));
  };

  const deleteProject = (projectId) => {
    setProjects(projects.filter((project) => project._id !== projectId));
    onDeleteProject(projectId);
  };

  return (
    <div className='py-5'>
      <div className="px-4 mb-3 flex items-center justify-between">
        <span className='mr-2' style={{ marginRight: '25%' }}>Projects</span>
        <button onClick={openModal} className='bg-indigo-200 rounded-full p-[2px] focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-offset-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-indigo-600">
            <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <ul className='border-r border-gray-300 pr-2'>
        {projects.map((project, index) => (
          <div key={index} className="flex items-center justify-between">
            <Link to={`/${project._id}`} onClick={(e) => handleLocation(e, project._id)} className="flex-grow">
              <li className={`px-5 py-1.5 mb-1 text-gray-600 font text-sm capitalize select-none hover:text-indigo-600 rounded transition-colors hover:bg-indigo-200/80 ${paramsWindow === project._id && 'text-indigo-600 bg-indigo-200/80'}`}>
                {project.title}
              </li>
            </Link>
            <DropdownButton
              as="div"
              id={`dropdown-${project._id}`}
              drop="end"
              variant="link"
              title={<Gear />}
              className="p-0 m-0"
            >
              <Dropdown.Item onClick={() => openEditModal(project)}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={() => deleteProject(project._id)}>Delete</Dropdown.Item>
            </DropdownButton>
          </div>
        ))}
      </ul>
      <AddProjectModal isModalOpen={isModalOpen} closeModal={closeModal} addProjectToList={addProjectToList} />
      {selectedProject && (
        <EditProjectModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          project={selectedProject}
          onEdit={editProject}
        />
      )}
    </div>
  );
};

export default Sidebar;