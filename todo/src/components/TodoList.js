import React from 'react';
import { connect } from 'react-redux';

const TodoList = props => {
    return(
        <div>
            <h1>Todo List:</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const connectState = connect(
    mapStateToProps 
)

const TodoListEnhanced = connectState(TodoList);

export default TodoListEnhanced;