import React from 'react';
import TodoItem from './TodoItem.js';

export default (props) => {
    const todos = props.todos.map((todo, i) => <TodoItem todo={todo} key={i} />);
    return (
        <ul>
            { todos }
        </ul>
    );
};