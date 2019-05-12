import React from 'react';
import App from './App';
import './TodoList.css';


const TodoList = props => {
    console.log(props);
    return (
        <ul className="todoListContainer">

        {props.todo.map(render => {
            return <li className="todoList" key={render} onClick={() => props.handleComplete(render)} >{render}</li>
        })}

        </ul>
    )
}

export default TodoList