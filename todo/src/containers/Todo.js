import React from 'react';
import styled from 'styled-components';

const List = styled.div`
    width: 30%;
    border: 1px solid black;
    ${props=>props.completed ? 'text-decoration: line-through' : null}
`;

class Todo extends React.Component{
    handleClick = (event)=>{
        event.preventDefault();
        this.props.completeTodo(this.props.todo.id);
    }

    render(){
        return(
            <div onClick={this.handleClick}>
            <List completed={this.props.todo.completed}>{this.props.todo.value}</List>
            </div>
        )
    }
}

export default Todo;