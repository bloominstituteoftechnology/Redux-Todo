import React from 'react';
import {toggleCompleted} from '../actions/actions';
import {connect} from 'react-redux';

class TodoItem extends React.Component {
    toggleCompleted = (event)=> {
        this.props.toggleCompleted(this.props.item)
    }

    render() {
        return (
            <li>
                <input
                    type='checkbox'
                    onChange={this.toggleCompleted}
                />
                {this.props.todo.value}
            </li>
        );
    }
}

export default connect({toggleCompleted})(TodoItem);