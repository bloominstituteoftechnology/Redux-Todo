import React from 'react';
import './Todo.css';

const Todo = props => {
    return(
        <li className="todoItem"
            // onClick={() => props.handleTodoClick(props.todo.id)}
            value={props.todo.value}
        >{props.todo.value}
        </li>
    );
}

export default Todo;