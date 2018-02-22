import React from 'react';

export default ({todo, toggleComplete, remove}) => {
    const completed = todo.completed ? 'completed' : 'incomplete';
    return (
    <li className="todoList__item" onClick={toggleComplete}>
        <span className={`complete ${completed}`}>{ completed }</span>
        <span className="text">{todo.text}</span>
        <button onClick={remove}>remove</button>
    </li>
)}