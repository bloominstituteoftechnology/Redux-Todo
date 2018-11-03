import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.todo}
            </div>
        );
    }
}

export default Todo;
