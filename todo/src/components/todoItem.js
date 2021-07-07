import React from 'react';
import { completeToggle } from '../actions';
import { connect } from 'react-redux';
import { Component } from 'react';

class TodoItem extends Component {
    
    completeToggle(event) {
        this.props.completeToggle(this.props.index);
    }

    render() {
        return (
            <li>
                <input type="checkbox" onChange={this.completeToggle.bind(this)} />
                {this.props.todo.value}
            </li>
        );
    }
}




export default connect(null, { completeToggle })(TodoItem);