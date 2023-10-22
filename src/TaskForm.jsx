import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.length < 3) {
      setError('El nombre de la tarea debe tener al menos 3 caracteres');
      return;
    }

    setError('');
    onAddTask(taskName, taskDescription);
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taskName">Nombre de la Tarea:</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="taskDescription">Descripción de la Tarea:</label>
        <input
          type="text"
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      {error && <div className="error-message" style={{color: 'red'}}>{error}</div>}
      <button type="submit">Guardar Tarea</button>
    </form>
  );
};

export default TaskForm;