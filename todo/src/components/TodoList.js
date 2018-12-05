import React, { Component } from 'react';

import { connect } from 'react-redux';

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

const connectState = connect( 
    mapStateToProps
)

const EnhancedTodoList = connectState(TodoList);
export default EnhancedTodoList;