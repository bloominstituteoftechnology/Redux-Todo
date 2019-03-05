import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodoComplete, deleteTodo } from '../actions/todoActions';

import './Todo.css';

class Todo extends Component {

    toggleTodoComplete = id => {
        this.props.toggleTodoComplete(id);
    }

    deleteTodo = id => {
        this.props.deleteTodo(id);
    }

    render() {
        return (
            <div className="todo">
                <span className={!this.props.todo.completed ? "" : "completed"} onClick={() => this.toggleTodoComplete(this.props.todo.id)}>{this.props.todo.todo}</span>
                <span className="delete-todo" onClick={() => this.deleteTodo(this.props.todo.id)}>X</span>
            </div>
        )
    }
}

export default connect(null, { toggleTodoComplete, deleteTodo })(Todo);
