import React from 'react';
import Todo from './Todo'

const ToDoList = (props) => {
    return (
        <div className="to-do-list">
            {props.todos.map((todo, i) => {
                return <Todo key={i} todo={todo}/>
            })}
        </div>
    )
}
 
export default ToDoList;