import React from 'react';

const ToDoForm = props => {
    return(
        <div>
            <input name='toDoText' value={props.toDoText} type='text' placeholder='Add a new todo' onChange={props.inputHandler} />
            <button onClick={props.addToDo}>Add me </button>
        </div>
    )
}


export default ToDoForm;