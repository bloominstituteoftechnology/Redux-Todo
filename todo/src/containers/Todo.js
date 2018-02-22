import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTodoItem, deleteTodoItem } from '../actions';

class Todo extends Component {
    toggleTodoItem() {
        this.props.toggleTodoItem(this.props.index);
        console.log(this.props.todo.completed);
    }

    deleteTodoItem() {
        this.props.deleteTodoItem(this.props.index);
        // console.log(this.props.todo.completed);
    }

    render() {
        return (
        <li>
            <input type="checkbox" 
            onChange={this.toggleTodoItem.bind(this)}/>
            {this.props.todo.value}
            <button onClick={this.deleteTodoItem.bind(this)}>
            Delete
            </button>
        </li>
        );
    }
}

export default connect(null, { toggleTodoItem, deleteTodoItem })(Todo);