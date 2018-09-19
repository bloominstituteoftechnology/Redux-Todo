import React from 'react';
import './Todo.css';

function TodoForm(props) {
    return(
        <form>
            <input value={props.value} onChange={props.handleInput}></input>
            <button className="add-todo-button"
                    onClick={props.handleAddTodo}>Add Todo</button>
            {/* <button onClick={props.handleRemoveTodos}>Clear Completed</button> */}
        </form>
    );
}

export default TodoForm;