import React, { Component } from 'react';
import Todo from './Todo.js';
import styled from 'styled-components';


const TodoListContainer = styled.div`
    width:450px;
    display:flex;
    flex-flow:column;
`;

const TodoList = (props) => {
    
    return <TodoListContainer>
        {
            props.todos.map((todo, index)=>{
                return <Todo key={todo} index={index} todo={todo} />
            })
        }
    </TodoListContainer>
}

export default TodoList;


