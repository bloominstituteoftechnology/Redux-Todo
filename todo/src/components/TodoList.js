import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const ToDosList = styled.div`
    width: 100%;
    box-shadow: 10px 10px 5px #aaaaaa;
    display: flex;
    flex-wrap: wrap;
`;


export default (props) => {
    const todos = props.todos.map((todo, i) => <TodoItem todo={todo} key={i} index={i} />);
    return (
        <ToDosList>
            { todos }
        </ToDosList>
    );
};