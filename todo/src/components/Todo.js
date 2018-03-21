import React, { Component } from 'react';

export class Todo extends Component {
    render() {
        return (
            <div>
                <div>{this.props.todo.text}</div>
            </div>
        );
    }
}

export default Todo;