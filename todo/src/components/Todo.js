import React, { Component } from 'react';
import './Todo.css';

export class Todo extends Component {
    state = {
        done: false
    }

    render() {
        return (
            <div>
                <div className={this.state.done ? 'Done' : ''} 
                onClick={() => this.setState({done: !this.state.done})}>
                {this.props.text}
                </div>
            </div>
        );
    }
}

export default Todo;