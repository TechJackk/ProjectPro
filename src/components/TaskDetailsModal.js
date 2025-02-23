import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const TaskDetailsModal = ({ isOpen, onClose, task }) => {
  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Task Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{task.title}</h5>
        <p>{task.description}</p>
        <p><strong>Due Date:</strong> {new Date(task.dueDate).toLocaleString()}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskDetailsModal;