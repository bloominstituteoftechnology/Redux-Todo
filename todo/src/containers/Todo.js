import React from 'react';
import styled from 'styled-components';

const List = styled.div`
    width: 30%;
    border: 1px solid black;
    ${props=>props.completed ? 'text-decoration: line-through' : null}
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
            <div onClick={this.handleMarkComplete}>
            <List completed={this.props.todo.completed}>{this.props.todo.value}</List>
            <div onClick={this.handleDeleteTodo}>X</div>
            </div>
        )
    }
}

export default Todo;