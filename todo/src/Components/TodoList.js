import React from 'react';
import TodoItems from './Todo';

export default (props) => {
    const todos = props.todos.map((todo, i) => {
        <TodoItems todo={todo} key={i} index={i} />
    })
    return (
        <ul>
            { todos }
        </ul>
    );
    
};
