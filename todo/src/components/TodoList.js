import React from 'react';
import TodoItem from './TodoItem';

export default (props) => {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}