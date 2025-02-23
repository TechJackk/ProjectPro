import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';

const EditProjectModal = ({ isOpen, onClose, project, onEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDescription(project.description);
    }
  }, [project]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error('Title and description are required');
      return;
    }

    const updatedProject = { ...project, title, description };
    onEdit(updatedProject);
    onClose();
    toast.success('Project updated successfully');
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditProjectModal;