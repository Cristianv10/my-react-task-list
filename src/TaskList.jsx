import { useState } from 'react';
import Task from './Task';
import { useTaskManager } from './customHooks';

const TaskList = () => {
  const { tasks, addTask, deleteTask, editTask } = useTaskManager();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    addTask(newTaskTitle, newTaskDescription);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  return (
    <div>
      <h2>Tareas</h2>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Título"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
    </div>
  );
};

export default TaskList;
