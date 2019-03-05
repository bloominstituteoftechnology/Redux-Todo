import React, { Component } from 'react'

class Todo extends Component {

    toggleComplete = id => {
        console.log(id)
    }

    render() {
        return (
            <div>
                <span onClick={() => this.toggleComplete(this.props.todo.id)}>{this.props.todo.todo}</span>
            </div>
        )
    }
}

export default Todo;
