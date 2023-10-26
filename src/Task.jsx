const Task = ({ task, index, deleteTask, editTask, toggleStatus }) => {
  return (
    <>
      <div>
        <strong>{task.title}</strong>
        {task.status == "Completado" ? <span>✔</span> : <span>◻</span>}
        <p>{task.description}</p>
      </div>
      <button onClick={() => deleteTask(index)}>Eliminar</button>
      <button
        onClick={() => {
          const newTitle = prompt('Nuuevo título:', task.title);
          const newDescription = prompt('Nueva descripción:', task.description);
          if (newTitle !== null && newDescription !== null) {
            editTask(index, newTitle, newDescription);
          }
        }}
      >
        Editar
      </button>
      <button
        onClick={() => {
          toggleStatus(index);
        }}
      >
        {task.status == "Completado" ? "Poner pendiente" : "Completar"}
      </button>
    </>
  );
}

export default Task;