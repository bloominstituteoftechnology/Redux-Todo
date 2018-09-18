import React from 'react';

function TodoForm(props) {
    return(
        <form>
            <input value={props.value} onChange={props.handleInput}></input>
            <button onClick={props.handleAddTodo}>Add Todo</button>
        </form>
    );
}

export default TodoForm;