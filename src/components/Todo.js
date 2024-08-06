import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

// Component to display a single task with options to edit, delete, and toggle completion
export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="Todo">
      <p
        className={`${task.completed ? 'completed' : ''}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        <FontAwesomeIcon icon={faCheck} onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed-icon' : ''}`} />
      </div>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <div className="task-details">
          <p>Description: {task.task}</p>
          <p>Last Updated: {new Date(task.lastUpdated).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};
