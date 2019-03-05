import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodoComplete, deleteTodo } from '../actions/todoActions';

class Todo extends Component {

    toggleTodoComplete = id => {
        this.props.toggleTodoComplete(id);
    }

    deleteTodo = id => {
        this.props.deleteTodo(id);
    }

    render() {
        return (
            <div>
                <span onClick={() => this.toggleTodoComplete(this.props.todo.id)}>{this.props.todo.todo}</span> {' '}
                <span onClick={() => this.deleteTodo(this.props.todo.id)}>delete</span>
            </div>
        )
    }
}

export default connect(null, { toggleTodoComplete, deleteTodo })(Todo);
