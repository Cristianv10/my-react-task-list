import { useState, useEffect } from 'react';

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);
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

  const editTask = (index, title, description) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], title, description };
    setTasks(updatedTasks);
  };


  return {
    tasks,
    addTask,
    deleteTask,
    editTask,
  };
};

export {useTaskManager};