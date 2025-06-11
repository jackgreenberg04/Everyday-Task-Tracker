import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

/**
 * Main application component. Manages global task state and persistence.
 */
function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  // Add a new task to state
  const addTask = ({ title, description }) => {
    setTasks([
      ...tasks,
      { id: uuidv4(), title, description, completed: false },
    ]);
  };

  // Toggle completed state of a task
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Edit a task
  const editTask = (id, updated) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updated } : t)));
  };

  // Titles used for validation
  const titles = tasks.map((t) => t.title.toLowerCase());

  // Pending task count for display
  const pendingCount = tasks.filter((t) => !t.completed).length;

  useEffect(() => {
    document.title = `Tasks (${pendingCount})`;
  }, [pendingCount]);

  return (
    <div className="App">
      <h1>Everyday Task Tracker</h1>
      <TaskForm existingTitles={titles} onAdd={addTask} />
      <p>{pendingCount} tasks pending</p>
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;

