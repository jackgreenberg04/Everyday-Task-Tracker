import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Form for adding a new task. Validates title for uniqueness and non-empty.
 */
export default function TaskForm({ existingTitles, onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    if (existingTitles.includes(title.trim().toLowerCase())) {
      setError('Task title already exists');
      return;
    }
    onAdd({ title: title.trim(), description: description.trim() });
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Optional description"
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit">Add Task</button>
    </form>
  );
}

TaskForm.propTypes = {
  existingTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAdd: PropTypes.func.isRequired,
};

