import React, { Component } from 'react';

const TodoForm = props => {
    return (
        <div>
            <input
            name = "todoText"
            value={props.todoText}
            type="text"
            placeHolder="Add todo"
            />
            <button onClick={props.addTodo}>Add</button>
        </div>
    )
}

export default TodoForm;