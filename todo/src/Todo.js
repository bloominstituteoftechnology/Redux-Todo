import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                {this.props.todo}
            </div>
        );
    }
}

export default Todo