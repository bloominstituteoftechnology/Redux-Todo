import React from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    padding: 5px;
    box-shadow: 1px 1px 2px #999999;
    border: 1px solid black;
    border-radius: 5px;
`;

const TodoItem = styled.p`
    margin-right: 5px;
    word-break: break-all;
    ${props=>props.completed ? 'text-decoration: line-through' : null}
`;

const DeleteX = styled.div`
    padding: 3px;
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 3px;
    cursor: pointer;

    &:hover{
        color: white;
        background-color: black;
    }
`;

class Todo extends React.Component{
    handleMarkComplete = (event)=>{
        event.preventDefault();
        this.props.completeTodo(this.props.todo.id);
    }

    handleDeleteTodo = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        this.props.deleteTodo(this.props.todo.id);
    }

    render(){
        return(
            <TodoContainer onClick={this.handleMarkComplete}>
            <TodoItem completed={this.props.todo.completed}>{this.props.todo.value}</TodoItem>
            <DeleteX onClick={this.handleDeleteTodo}>X</DeleteX>
            </TodoContainer>
        )
    }
}

export default Todo;