import React from 'react';

const Todo = (props) => {
    return (
        <span onClick={props.onClick}><input type = 'checkbox' defaultChecked = {props.completed}></input>{props.value}</span>

    )
}

export default Todo;