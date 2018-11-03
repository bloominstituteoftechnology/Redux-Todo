import React, { Component } from 'react';
import './App.css';

class Todo extends Component {

    render() {
        return (
            <div 
                className={this.props.todo.completed ? 'todo-completed' : 'todo'}
                onClick={this.props.onClick}
            >
                {this.props.todo.name}
            </div>
        );
    }
}

export default Todo;