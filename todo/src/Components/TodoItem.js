import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

export default TodoItem;