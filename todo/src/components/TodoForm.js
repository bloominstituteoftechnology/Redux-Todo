import React, { Component } from 'react';
import { toggleComplete } from '../actions/actions';
import { connect } from 'react-redux';

class TodoForm extends Component {

    toggleComplete(event) {
        this.props.toggleComplete(this.props.index);
    }
    render() {
        return (
            <div className = "todo-form">
            <ul>
                <li>
                    <input
                    type="checkbox"
                    onChange={this.toggleComplete.bind(this)}
                    />
                    {this.props.task.value}
                </li>
            </ul>

            </div>

        );
    }
}

export default connect(null, { toggleComplete })(TodoForm);