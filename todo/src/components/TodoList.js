import React from 'react';

import TodoTask  from './TodoTask';
import { List } from '../styles/TodoList';

const TodoList = (props) => {
    return (
        <List>
            {props.listArray.map((task, index) => <TodoTask task={task} key={index} clickHandler={() => props.toggleCompleted(index)} />)}
        </List>
    )
}

export default TodoList;