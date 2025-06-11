import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TaskEditModal from './TaskEditModal';

/**
 * Displays a single task with controls to toggle, edit, or delete it.
 */
export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="info" onClick={onToggle} role="button" tabIndex={0}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          aria-label="Mark completed"
        />
        <div>
          <h4>{task.title}</h4>
          {task.description && <p>{task.description}</p>}
        </div>
      </div>
      <div className="actions">
        <button onClick={() => setEditing(true)}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
      {editing && (
        <TaskEditModal
          task={task}
          onSave={(updated) => {
            onEdit(updated);
            setEditing(false);
          }}
          onClose={() => setEditing(false)}
        />
      )}
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

