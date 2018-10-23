import React from 'react';

import { Task, CompletedTask } from '../styles/TodoTask';

const TodoTask = (props) => {

    console.log(props.task.completed);
    return (
        props.task.completed ? <CompletedTask onClick={props.clickHandler}>{props.task.value}</CompletedTask> :<Task onClick={props.clickHandler}>{props.task.value}</Task>
    );
}

export default TodoTask;