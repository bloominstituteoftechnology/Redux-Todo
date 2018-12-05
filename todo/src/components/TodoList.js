import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
    addToList,
    toggleComplete
} from '../actions';

const TodoList = props => {
    

        return(
            <div>
                <h1>Todo List:</h1>
            </div>
        )
}

// Connect Store

const mapStateToProps = state => {  
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToList: text => dispatch(addToList(text)),
        toggleComplete: index => dispatch(toggleComplete(index))
    };
}

const connectState = connect( 
    mapStateToProps,
    mapDispatchToProps
)

const EnhancedTodoList = connectState(TodoList);
export default EnhancedTodoList;