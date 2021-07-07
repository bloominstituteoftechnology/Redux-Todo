import React from 'react';
import TodoItem from './TodoItem';

export default (props) => {
    const todos = props.todos.map((todo, 1) => <TodoItem todo={todo} key={1} />);
    return (
        <ul>
            {todos}
        </ul>
    );
}