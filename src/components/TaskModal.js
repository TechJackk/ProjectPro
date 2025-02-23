import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const TaskModal = ({ isModalOpen, closeModal, task }) => {
  return (
    <Modal show={isModalOpen} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Task Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{task.title}</h5>
        <p>{task.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;