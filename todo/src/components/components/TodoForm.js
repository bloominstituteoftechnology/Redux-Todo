import React from 'react';

const TodoForm = props => {
    return(
        <form>
            <input 
                type="text"
                name="todoInput"
                placeholder="Enter todo..."
                onChange={props.handleInput}
                value={props.todoInput}
            />
            <button onClick={props.addTodo}>Add Todo</button>
        </form>
    );
}

export default TodoForm;