import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Tasks = ({ tasks, openTaskModal }) => {
  return (
    <ListGroup>
      {tasks.map((task) => (
        <ListGroup.Item key={task._id} onClick={() => openTaskModal(task)}>
          {task.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Tasks;