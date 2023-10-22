import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { useTaskManager } from './customHooks';

const initialTasks = [
  { name: 'Tarea 1', completed: true },
  { name: 'Tarea 2', completed: false },
  { name: 'Tarea 3', completed: false },
];

const App = () => {
  const { tasks, addTask, deleteTask, editTask, toggleTaskStatus} = useTaskManager(initialTasks);

  return (
    <div>
      <h1>Todo App</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} onComplete={toggleTaskStatus}/>
    </div>
  );
}


export default App
