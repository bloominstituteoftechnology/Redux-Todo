import React from 'react';

const Todo = ({ completeTodo, deleteTodo, completed, text }) => {
  return (
    <div className="todo-item">
      <li
        onClick={completeTodo}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {text}
      </li>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default Todo;
