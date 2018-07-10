import React from 'react';
import styled from 'styled-components';

const StyledLI = styled.li`
    text-decoration: ${props => (props.completed ? "line-through" : "none")}
`;

const TodoItem = (props) => {
    return (
        <StyledLI onClick={props.toggleCompleted}>{props.item.todo}</StyledLI>
    );
}

export default TodoItem;