import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

function ToDoList(props){
    return (
        <div>
            Inputs Go Here
        </div>
    )
}

const mapStateToProps = state => {
    return { todos: state.todos}
}

export default connect (
    mapStateToProps, { addTodo })(ToDoList);