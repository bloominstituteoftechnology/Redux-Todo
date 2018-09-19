import React, { Fragment } from 'react';

export default function TodoList(props) {
    return (
        <Fragment>
        <input type="text" value={props.inputText} onChange={props.handleChange} />
        <button onClick={props.addTodo}>Add Todo</button>
        <ul>
            {props.todosList.map(todo => ( <li key={todo.id}>{todo.value}</li>))}
        </ul>
        </Fragment>
    );
}

// proptypes