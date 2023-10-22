const Task = ({ task, index, deleteTask, editTask }) => {
  return (
    <li>
      <div>
        <strong>{task.title}</strong>
        <p>{task.description}</p>
      </div>
      <button onClick={() => deleteTask(index)}>Eliminar</button>
      <button
        onClick={() => {
          const newTitle = prompt('Nuevo título:', task.title);
          const newDescription = prompt('Nueva descripción:', task.description);
          if (newTitle !== null && newDescription !== null) {
            editTask(index, newTitle, newDescription);
          }
        }}
      >
        Editar
      </button>
    </li>
  );
}

export default Task;