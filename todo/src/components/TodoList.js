import React from 'react';

export default function TodoList(props) {
    return (
        <div className="todo-list">
            {props.tasks.map(task => <p>{task.value}</p>)}
        </div>
    );
}