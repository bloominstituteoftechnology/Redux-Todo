import React from 'react'; 

 const TodoForm = (props) => {
    return(
        <div className = "todo-form">
            <input onChange = {props.change} type = "text" value = {props.value} placeholder = "Enter task here"/>
            <button onClick = {props.submitData} >Add Todo</button>
        </div>
    )
}
 export default TodoForm; 