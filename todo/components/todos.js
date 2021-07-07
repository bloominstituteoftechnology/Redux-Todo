import React from 'react';
import TodoForm from './todoform';
import TodoForm from './todolist';

const Todos = () => {
    return(
        <React.Fragment>
        <TodoForm />
        <TodoList />
        </React.Fragment>
    )
}

export default Todos;