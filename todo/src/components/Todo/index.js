import React from 'react';
import './Todo.css';

const Todo = ({ onClick, completed, text }) => (
  <li
    className="Todo"
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
    <span className="Todo__delete">✖</span>
  </li>
);

export default Todo;
