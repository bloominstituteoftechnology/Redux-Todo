import React from 'react';
import Todo from './Todo';
import shortid from 'shortid'

const TodoList = props => {
    return (
        <ul>
            {props.tasks.map(task => <Todo key={shortid.generate()} text={task.text} complete={task.completed} id={task.id} toggleTask={props.toggleTask} />)}
        </ul>
    );
};

export default TodoList;