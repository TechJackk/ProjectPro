import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TaskCard from './TaskCard';
import AddTaskModal from './AddTaskModal';
import EditTaskModal from './EditTaskModal';
import TaskDetailsModal from './TaskDetailsModal';
import { Button } from 'react-bootstrap';

const TaskPage = () => {
  const { projectId } = useParams();
  const [tasksByProject, setTasksByProject] = useState({});
  const [selectedTask, setSelectedTask] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);

  useEffect(() => {
    // Initialize tasks for the project if not already initialized
    if (!tasksByProject[projectId]) {
      setTasksByProject((prev) => ({ ...prev, [projectId]: [] }));
    }
  }, [projectId, tasksByProject]);

  const addTask = (task) => {
    setTasksByProject((prev) => ({
      ...prev,
      [projectId]: [...prev[projectId], task],
    }));
  };

  const editTask = (updatedTask) => {
    setTasksByProject((prev) => ({
      ...prev,
      [projectId]: prev[projectId].map((t) =>
        t.id === updatedTask.id ? updatedTask : t
      ),
    }));
  };

  const deleteTask = (id) => {
    setTasksByProject((prev) => ({
      ...prev,
      [projectId]: prev[projectId].filter((t) => t.id !== id),
    }));
  };

  const tasks = tasksByProject[projectId] || [];

  return (
    <div className="task-page">
      <h1>Tasks for Project {projectId}</h1>
      <Button variant="primary" className="mb-3" onClick={() => setAddModalOpen(true)}>Add Task</Button>
      <div className="task-list mt-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            openTaskModal={() => { setSelectedTask(task); setDetailsModalOpen(true); }}
            openEditTaskModal={() => { setSelectedTask(task); setEditModalOpen(true); }}
            deleteTask={deleteTask}
          />
        ))}
      </div>
      <AddTaskModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)} onAdd={addTask} />
      {selectedTask && (
        <EditTaskModal
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          task={selectedTask}
          onEdit={editTask}
        />
      )}
      {selectedTask && (
        <TaskDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => setDetailsModalOpen(false)}
          task={selectedTask}
        />
      )}
    </div>
  );
};

export default TaskPage;