import React from 'react';
import TodoForm from './TodoForm';

export default (props) => {
    const tasks = props.tasks.map((task, i) =>
    <TodoForm task = {task} key={i} index = {i} />);
    return (
        <ul>
            { tasks }
        </ul>
    );
};