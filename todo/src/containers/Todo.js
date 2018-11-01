import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {completeTodo} from '../actions/actions';

const List = styled.li`
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

export default connect(()=>({}), {completeTodo})(Todo);