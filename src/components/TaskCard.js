import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

const TaskCard = ({ task, openTaskModal, openEditTaskModal, deleteTask }) => {
  return (
    <Card className="mb-3 shadow-sm w-100">
      <Card.Body className="d-flex flex-column justify-content-between" style={{ minHeight: '150px' }}>
        <div>
          <Card.Title>{task.title}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
        </div>
        <div className="d-flex justify-content-between align-items-end mt-auto">
          <Button variant="info" onClick={() => openTaskModal(task)}>
            View Details
          </Button>
          <div>
            <Button
              variant="warning"
              className="me-2"
              onClick={() => openEditTaskModal(task)}
            >
              <PencilSquare /> Edit
            </Button>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              <Trash /> Delete
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;