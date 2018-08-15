import React, { Component } from 'react';
import Todo from './Todo.js';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addTodo, toggleTodo } from '../actions/index.js';


const TodoListContainer = styled.div`
    width:450px;
    display:flex;
    flex-flow:column;
`;

const TodoList = (props) => {
    console.log("todolist props", props);
    
    return <TodoListContainer>
    TODOLIST
        {/* {
            props.todos.map((todo)=>{
                return <Todo todo={todo}/>
            })
        } */}
    </TodoListContainer>
}

const mapStateToProps = (state) => {
    return {
        todos: this.state,
    }
}


export default connect(mapStateToProps, {
    addTodo, toggleTodo
})(TodoList);
