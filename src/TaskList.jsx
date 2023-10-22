import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={index} name={task.name} completed={task.completed} />
      ))}
    </div>
  );
}

export default TaskList;