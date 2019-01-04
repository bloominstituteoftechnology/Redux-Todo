import React from 'react';

const TodoList = props => (
    <div>
        <ul>
            {props.todos.map(todo => <li key={todo.id}>{todo.value}</li>)}
        </ul>
    </div>
);

export default TodoList;