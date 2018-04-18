import React from 'react';
import App from './App'


const TodoList = props => {
    console.log(props);
    return (
        <ul>

        {props.todo.map(render => {
            return <li key={render} onClick={() => props.handleComplete(render)} >{render}</li>
        })}

        </ul>
    )
}

export default TodoList