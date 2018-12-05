import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList } from '../actions';

class TodoForm extends Component { 
    render(){
        return(
            <div>
                <h1>Todo Form</h1>
            </div>
        )
        
    }
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
    };
}

const connectState = connect( 
    mapStateToProps,
    mapDispatchToProps
)

const EnhancedTodoForm = connectState(TodoForm);

export default EnhancedTodoForm;