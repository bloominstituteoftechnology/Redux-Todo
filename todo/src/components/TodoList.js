import React from 'react';
import './Todo.css'

function TodoList(props) {
    return (
       <div className="todo-list">
            <ul className="my-ul">
            {props.todos.map(todo => {
                return <li onClick={()=> props.handleComplete(todo.id)}
                    style={todo.completed ? {textDecoration: 'line-through'} : null } 
                    key={todo.id}>{todo.text}<button className="close" onClick={props.removeTodo} >x</button></li>
            })}
            </ul>
       </div>
    )
}

export default TodoList;