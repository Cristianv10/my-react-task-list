import { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onEdit, onComplete }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          deleteTask={onDelete}
          editTask={onEdit}
          toggleStatus={onComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
