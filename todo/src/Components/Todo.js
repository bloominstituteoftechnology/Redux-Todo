import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <div>
                <span>{this.props.todo.text}</span>
            </div>
        )
    }
}

export default Todo;