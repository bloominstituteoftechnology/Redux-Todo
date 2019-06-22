import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

const Todo = () => {
    return (
        <React.Fragment>
            <Form />
            <TodoList />
            </React.Fragment>
    );
};

export default Todo;