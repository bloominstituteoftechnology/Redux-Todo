import React from 'react';

import { Task, CompletedTask, TaskText, Close } from '../styles/TodoTask';

const TodoTask = (props) => {

    console.log(props.task.completed);
    return (
        props.task.completed ?
            <CompletedTask onClick={props.toggleHandler}>
                <Close onClick={props.closeHandler}>X</Close>
                <TaskText>{props.task.value}</TaskText>
            </CompletedTask> :
            <Task onClick={props.toggleHandler}>
                <Close onClick={props.closeHandler}>X</Close>
                <TaskText>{props.task.value}</TaskText>
            </Task>
    );
}

export default TodoTask;