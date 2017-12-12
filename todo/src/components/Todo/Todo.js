import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleComplete, delTodo } from '../../actions';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            checked: false,
        }
    }

    componentDidMount() {
        this.setState({ checked: this.props.todo.completed });
    }

    toggleComplete() {
        let flag = this.state.checked;
        this.props.toggleComplete(this.props.index);
        this.setState({ checked: !flag });
    }

    delTodo() {
        this.props.delTodo(this.props.index);
    }

    render() {
        return (
            <li className="Todo">
                <input
                    type="checkbox"
                    onChange={this.toggleComplete.bind(this)}
                    checked={this.state.checked} />
                {this.props.todo.value}
                <button className="DeleteButton" onClick={this.delTodo.bind(this)}>X</button>
                <hr />
            </li>
        );
    }

}

export default connect(null, { toggleComplete, delTodo })(Todo);