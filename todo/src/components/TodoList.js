import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => <Todo key={todo.value} todo={todo} />)}
        </div>
    );
};

export default TodoList;