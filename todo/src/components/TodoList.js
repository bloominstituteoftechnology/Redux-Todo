import React from 'react';


const TodoList = props => {
    return (
        <ul>

        {props.todo.map(render => {
            return <li key={render} >{render}</li>
        })}

        </ul>
    )
}

export default TodoList