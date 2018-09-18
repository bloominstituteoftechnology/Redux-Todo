import React from 'react';

const Todo = props => {
    return(
        <li>
            {props.todo.text}
            <button onClick={props.completeTodo}>Complete Todo</button>
        </li>
    );
}

export default Todo;