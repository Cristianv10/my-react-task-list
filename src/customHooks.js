import { useState, useEffect } from 'react';

const useTaskManager = (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks || []);
  const [tasksLoaded, setTasksLoaded] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
    setTasksLoaded(true);
  }, []);

  useEffect(() => {
    if (tasksLoaded) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasksLoaded, tasks]);

  const addTask = (title, description) => {
    if (title.trim() !== '') {
      const newTask = {
        title,
        description,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index, title, description, status) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], title, description, status: status || updatedTasks[index].status};
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index],  status: updatedTasks[index].status == 'Completado' ? 'No completado' : 'Completado'};
    setTasks(updatedTasks);
  };


  return {
    tasks,
    addTask,
    deleteTask,
    editTask,
    toggleTaskStatus
  };
};

export {useTaskManager};