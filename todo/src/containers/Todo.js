import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTodoItem } from '../actions';

class Todo extends Component {
    toggleTodoItem() {
        this.props.toggleTodoItem(this.props.index);
        console.log(this.props.todo.completed);
    }

    render() {
        return (
        <li>
            <input type="checkbox" 
            onChange={this.toggleTodoItem.bind(this)}/>
            {this.props.todo.value}
        </li>
        );
    }
}

export default connect(null, { toggleTodoItem })(Todo);