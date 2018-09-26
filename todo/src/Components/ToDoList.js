import React from 'react';

const ToDoList = props => {
    return (
        <div>
            {props.list.map(todo => (<div key={todo.id}>{todo.text}</div>))}
        </div>
    );
};

export default ToDoList;