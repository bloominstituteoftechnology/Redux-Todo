import React from 'react';
import './Todo.css';

const Todo = ({ onClick, completed, text }) => (
  <li
    className="Todo"
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
  </li>
);

export default Todo;
