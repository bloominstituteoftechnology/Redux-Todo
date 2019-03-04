import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <span>{props.todo.todoText}</span>
        </div>
    )
}

export default Todo;
