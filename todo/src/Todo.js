import React from 'react';

const Todo = props => {
    return (
        <div onClick={() => props.toggleComplete(props.todo.id)}>
            {props.todo.text}
            </div>
    );
}

export default Todo;