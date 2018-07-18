import React, { Component } from 'react';
import { toggleCompleted } from '../Actions/index';
import { connect } from 'react-redux';

class Todo extends Component {
    constructor(props) {
        super(props) 
    }

    toggleCompletedHandler = e => {
        e.preventDefault();
        this.props.toggleCompleted();
    }

    render() {
        return (
            <div>
                <div onClick={this.toggleCompletedHandler}>{this.props.todo.text}</div>
            </div>
        )
    }
}

export default connect({ toggleCompleted })(Todo);