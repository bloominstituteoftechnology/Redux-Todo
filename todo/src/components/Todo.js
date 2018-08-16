import React, { Component } from 'react';
import styled from 'styled-components';


const TodoContainer = styled.div`
    width:100%;
    display:flex;
    flex-flow:column;
`;

const Todo = (props) => {
    console.log("todo props", props);
    
        return <TodoContainer>
            {props.todo.text}
            </TodoContainer>

}

export default Todo;