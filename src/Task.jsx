const Task = ({ name, completed }) => {
  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <span>{name}</span>
      {completed ? <span>✔</span> : <span>◻</span>}
    </div>
  );
}

export default Task;