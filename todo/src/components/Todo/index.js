import React from 'react';
import './Todo.css';

const Todo = ({ toggleComplete, completed, text, id, deleteTodo }) => (
  <li
    className="Todo"
    onClick={() => toggleComplete(id)}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
    <span onClick={() => deleteTodo(id)} className="Todo__delete">
      ✖
    </span>
  </li>
);

export default Todo;
