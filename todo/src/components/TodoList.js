import React from 'react';
import Todo from './Todo';
import shortid from 'shortid';
import styled from 'styled-components';

const Ul = styled.ul`
    width: 30vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
`

const TodoList = props => {
    return (
        <Ul>
            {props.tasks.map(task => <Todo key={shortid.generate()} text={task.text} complete={task.completed} id={task.id} toggleTask={props.toggleTask} />)}
        </Ul>
    );
};

export default TodoList;