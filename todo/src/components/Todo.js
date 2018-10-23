import React from 'react';

const Todo = props => (
    <li
        key={props.id}
        onClick={() => props.completeTodo(props.id)}
        style={props.completed ? { textDecoration: 'line-through' } : null}
    >
        {props.task}
        <span className="delete-todo" onClick={() => props.deleteTodo(props.id)}>X</span>
    </li>
);  

export default Todo;