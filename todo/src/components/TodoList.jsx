import React, { Fragment } from 'react';

export default function TodoList(props) {
    return (
        <Fragment>
        <input type="text" value={props.inputText} onChange={props.handleChange} />
        <button onClick={props.addTodo}>Add Todo</button>
        <ul>
            {props.todosList.map((todo, index) => ( <li onClick={() => props.toggleTodo(index)} key={index}>{todo.value}</li>))}
        </ul>
        </Fragment>
    );
}

// proptypes