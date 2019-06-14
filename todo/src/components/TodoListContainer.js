import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
const FlexDiv = styled.div`
display: flex;
flex-direction: column;
width: 300px;
background-color: lightgrey;
margin: 10px auto`

const TodoListContainer = (props) => {
    return (
        <FlexDiv>
            <TodoForm />
            <TodoList />
        </FlexDiv>
   
    );
};

export default TodoListContainer;