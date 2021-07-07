import React from 'react'; 

const TodoForm = (props) => {
    return(
        <div className = "todoForm">
            <input onChange = {props.change} type = "text" value = {props.value} placeholder = "Enter Todo"/>
            <button onClick = {props.submitData} >Add Todo</button>
        </div>
    )
}

export default TodoForm; 
