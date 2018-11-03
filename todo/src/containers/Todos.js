import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'

import Todo from './Todo';
import {loadSavedTodos, completeTodo, deleteTodo} from '../actions/actions';

const TodosContainer = styled.ul`
    dipslay: flex;
    flex-direction: column;
    font-size: 1.8rem;
    width 50%;
`;

class Todos extends React.Component{
    constructor(props){
        super(props);

        window.onbeforeunload = this.saveTodos;
    }

    componentDidMount(){
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if(savedTodos !==null){
            this.props.loadSavedTodos(savedTodos);
        }
    }

    saveTodos = ()=>{
        localStorage.setItem('todos', JSON.stringify(this.props.todos));
    }

    render(){
        return(
            <TodosContainer>
                {this.props.todos.map(item=><Todo key={item.id} todo={item} completeTodo={this.props.completeTodo} deleteTodo={this.props.deleteTodo}/>)}
            </TodosContainer>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        todos: state.todos
    }
}

export default connect(mapStateToProps, {loadSavedTodos, completeTodo, deleteTodo})(Todos);