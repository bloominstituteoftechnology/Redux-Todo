import React, { Fragment } from 'react';

export default function TodoList(props) {
    return (
        <Fragment>
            <input type="text" />
            <ul>
                {props.TodoList.map(todo => <li key={todo.id}> {todo.value} </li>)}
            </ul>
        </Fragment>
    )
}