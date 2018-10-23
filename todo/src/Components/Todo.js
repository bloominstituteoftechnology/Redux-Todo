import React from 'react';
import { toggleCompleted } from '../Actions/'


const Todo = props => {
    return (
        <li onClick={() => toggleCompleted(props.id)}>{props.todo.value}</li>
    );
}


export default Todo;