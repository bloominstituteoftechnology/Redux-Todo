import React from 'react';

export default ({todo, toggleComplete, remove}) => (
    <li className="todo-item" onClick={toggleComplete}><span>{todo.completed ? 'complete' : 'incomplete'}</span> - {todo.text} <button onClick={remove}>remove</button></li>
)