import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center; 
`
const ListDiv = styled.div`
    width: 200px;
`
const TodoList = props => {
    return(
        <ContainerDiv>
            {props.todos.map(todo => {
                return(
                    <ListDiv>
                        <Todo 
                            className='max-w-sm rounded overflow-hidden shadow-lg'
                            todo={todo.value}
                            key={todo.id}
                            id={todo.id}
                            toggleTodo={props.toggleTodo}
                            completed={todo.completed}
                        />
                    </ListDiv>
                )
            })}
        </ContainerDiv>
    )
}
export default TodoList; 