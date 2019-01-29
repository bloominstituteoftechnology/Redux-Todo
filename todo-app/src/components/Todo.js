import React from 'react';
import { toggleCompleted } from '../actions';

const Todo = props => {

    return (
        <h3 className={props.todo.completed ? 'todo completed' : 'todo' }onClick={() => props.toggleCompleted(props.todo.todo)}>{props.todo.todo}</h3>
    )
}

export default Todo;