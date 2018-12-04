import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <>
            {props.tasks.map(task => <Todo text={task.text} complete={task.complete} id={task.id} />)}
        </>
    );
};

export default TodoList;