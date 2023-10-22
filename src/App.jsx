import TaskList from './TaskList';

const tasks = [
  { name: 'Tarea 1', completed: true },
  { name: 'Tarea 2', completed: false },
  { name: 'Tarea 3', completed: false },
];

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}


export default App
