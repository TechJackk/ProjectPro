import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';

const AddTaskModal = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc || !dueDate) {
      toast.error('Title, description, and due date are required');
      return;
    }

    // Mock API call to create a new task
    const newTask = { id: Date.now().toString(), title, description: desc, dueDate };
    onAdd(newTask);
    onClose();
    toast.success('Task created successfully');
    setTitle('');
    setDesc('');
    setDueDate('');
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Task description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="datetime-local"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;