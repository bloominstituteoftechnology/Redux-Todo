import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoForm extends Component {
    render() {
        return(
            <div>
                <h1>Todo Form</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const connectState = connect(
    mapStateToProps
)

const TodoFormEnhanced = connectState(TodoForm);

export default TodoFormEnhanced;