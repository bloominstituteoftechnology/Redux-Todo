import React from 'react'; 

const Todo = (props) => {
    return (
        <div className = "todo">
            <li style = {props.styleTodo} onClick = {props.click} >{props.todoItem}</li>
            <button  onClick = {props.deleteClick} className = "button button-delete">Delete</button>
        </div>
    )
}

export default Todo; 