import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo =>
                <Todo
                    key={todo.value}
                    todo={todo}
                    handleCompleted={props.handleCompleted}
                    handleClear={props.handleClear}
                />
            )}
        </div>
    );
};

export default TodoList;