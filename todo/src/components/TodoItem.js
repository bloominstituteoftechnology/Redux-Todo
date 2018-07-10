import React from 'react';
import styled from 'styled-components';

const StyledLI = styled.li`
    text-decoration: ${props => (props.completed ? "line-through" : "none")};
    &:hover{ cursor: pointer }
`;

const TodoItem = (props) => {
    return (
        <StyledLI onClick={() => props.toggleCompleted(props.item.todo)}
                  completed={props.item.completed} >{props.item.todo}</StyledLI>
    );
}

export default TodoItem;