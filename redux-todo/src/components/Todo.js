import React from 'react';

const Todo = ({ text, id, completed, onTodoClick, onTodoRemove }) => {
  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        listStyle: 'none'
      }}
      onClick={() => onTodoClick(id)}
    >
      {text}
      <button onClick={() => onTodoRemove(id)}>&times;</button>
    </li>
  );
};

export default Todo;
