import React from 'react';
import { completedTodo } from './../actions/index';

const Todo = props => {
    return (
        <div onClick={props.completedTodo}
        style={{
            textDecoration: props.completed ? 'line-through' : 'none'
          }}>
            {props.item}
        </div>
    )
}

export default Todo;