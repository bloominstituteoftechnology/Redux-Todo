import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

const Todo = () => {
    return (
        <React.Fragment>
            <Form />
            <TodoList />
        </React.Fragment>
    );
};

export default Todo;
