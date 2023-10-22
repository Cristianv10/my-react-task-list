import { useState, useEffect } from 'react';
import Task from './Task';

const TaskList = () => {
  // Estado para almacenar las tareas
  const [tasks, setTasks] = useState([]);

  // Estado para almacenar el título y descripción de una nueva tarea
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  // Función para agregar una nueva tarea
  const addTask = () => {
    if (newTaskTitle.trim() !== '') {
      const newTask = {
        title: newTaskTitle,
        description: newTaskDescription,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
      setNewTaskDescription('');
    }
  };

  // Función para eliminar una tarea
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Función para editar una tarea
  const editTask = (index, title, description) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], title, description };
    setTasks(updatedTasks);
  };

  // Cargar las tareas desde localStorage al inicio
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Guardar las tareas en localStorage cada vez que se actualizan
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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
        <button onClick={addTask}>Agregar Tarea</button>
      </div>
    </div>
  );
};

export default TaskList;
