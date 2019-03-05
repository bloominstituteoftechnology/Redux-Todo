import React, { Component } from 'react'

class Todo extends Component {

    toggleTodoComplete = id => {
        console.log(id)
    }

    render() {
        return (
            <div>
                <span onClick={() => this.toggleTodoComplete(this.props.todo.id)}>{this.props.todo.todo}</span>
            </div>
        )
    }
}

export default Todo;
