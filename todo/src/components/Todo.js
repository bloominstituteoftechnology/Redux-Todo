import React, { Component } from 'react';

class Todo extends Component {

    markComplete(event) {
        console.log(event.target.id)
        this.props.toggleTask(event.target.id)
    }

    render() {
        return (
            <li><input checked={this.props.complete} name="taskCheck" type="checkbox" onChange={(event) => this.markComplete(event)} id={this.props.id} />{this.props.text}</li>
        )
    }
};

export default Todo;