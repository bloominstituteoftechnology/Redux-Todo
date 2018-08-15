import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoGroup = () => {
    return (
        <React.Fragment>
            <TodoList />
            <TodoForm />
        </React.Fragment>
    );
};

export default TodoGroup;