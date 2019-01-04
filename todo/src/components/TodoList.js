import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    align-items: center;
    
    span {
        margin-left: 5px;
        cursor: pointer;

        &:active {
            transform: translateY(1px);
        }

    }
`;

const TodoList = props => (
    <div>
        <ul>
            {props.todos.map(todo => (
                <li style={ todo.completed ? null : { listStyleType: 'circle'} }>
                    <Item>
                        <p>{todo.value}</p>
                        <span className="fas fa-times-circle" onClick={() => props.deleteTodo(todo.id)}></span>
                        <span className="fas fa-check" onClick={() => props.markFinished(todo.id)}></span>
                    </Item>
                </li>
            )
            )}
        </ul>
    </div>
);

export default TodoList;