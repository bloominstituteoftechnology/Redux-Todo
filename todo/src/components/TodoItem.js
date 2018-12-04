
import React from 'react';
import './TodoItem.css';

const TodoItem = props => {
    return (
        <div 
            className={props.todo.completed ? 'completed todo-list' : 'todo-list'}
            onClick={()=> props.toggleCompleted(props.todo.id)}
            // id={props.todo.display ? null : 'display-none'}
        > {props.todo.value}</div>
    );
}

export default TodoItem;