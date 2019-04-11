import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
    return (
        <React.Fragment>
            <TodoForm />
            <TodoList />
        </React.Fragment>
    );
};

export default Todos;
