import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';

const AddProjectModal = ({ isModalOpen, closeModal, addProjectToList, edit = false, id = null }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (edit && isModalOpen) {
      // Mock API call to fetch project details
      const mockProject = { title: 'Mock Project', description: 'Mock Description' };
      setTitle(mockProject.title);
      setDesc(mockProject.description);
    }
  }, [isModalOpen, edit, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      toast.error('Title and description are required');
      return;
    }

    if (!edit) {
      // Mock API call to create a new project
      const newProject = { _id: Date.now().toString(), title, description: desc };
      addProjectToList(newProject);
      closeModal();
      toast.success('Project created successfully');
      setTitle('');
      setDesc('');
    } else {
      // Mock API call to update an existing project
      const updatedProject = { _id: id, title, description: desc };
      addProjectToList(updatedProject);
      closeModal();
      toast.success('Project updated successfully');
      setTitle('');
      setDesc('');
    }
  };

  return (
    <Modal show={isModalOpen} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{edit ? 'Edit Project' : 'Create Project'}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Project title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Project description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            {edit ? 'Save Changes' : 'Create'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddProjectModal;