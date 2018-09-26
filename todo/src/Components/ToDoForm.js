import React from 'react';

const ToDoForm = props => {
    return (
        <form>
            <input 
            type='text'
            value={props.text}
            placeholder= 'Add To Do:'
            onChange = {props.inputHandler}
            />
            <button onClick={props.addTodo}>Add</button>
            
        </form>
    );
};

export default ToDoForm;