import React from 'react';

const Todo = ({ text, id, completed, onTodoClick }) => {
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      onClick={() => onTodoClick(id)}
    >
      {text}
    </li>
  );
};

export default Todo;
