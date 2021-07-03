import React from 'react';


const AddTodo = props => { 
    return (
        <form onSubmit={props.addToList}>
            <input type='text' placeholder='add task...'name='inputText' onChange={props.changeHandler} value={props.inputText}/>
            <button>Add Task</button>
        </form>
    );
}

export default AddTodo;