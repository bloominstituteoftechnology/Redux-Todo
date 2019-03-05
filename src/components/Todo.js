import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodoComplete } from '../actions/todoActions';

class Todo extends Component {

    toggleTodoComplete = id => {
        this.props.toggleTodoComplete(id);
    }

    render() {
        return (
            <div>
                <span onClick={() => this.toggleTodoComplete(this.props.todo.id)}>{this.props.todo.todo} {console.log(this.props.todo.completed)}</span>
            </div>
        )
    }
}

export default connect(null, { toggleTodoComplete })(Todo);
