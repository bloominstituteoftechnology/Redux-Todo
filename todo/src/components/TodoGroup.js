import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoGroup = () => {
    return (
        <div>
            <TodoList />
            <TodoForm />
        </div>
    );
};

export default TodoGroup;