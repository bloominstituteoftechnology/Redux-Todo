import React from 'react';

const Todo = props => {
    return (
        <div onClick = {e => props.complete(e.currentTarget.id)} id={`${props.id}`} className={`todo-${props.id}`+`${props.completed ? " completed" : ""}`}>
            <p>{props.text}</p>
        </div>
    )
}

export default Todo;