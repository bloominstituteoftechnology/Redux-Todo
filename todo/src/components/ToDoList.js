import React, { Component } from 'react';
import APP from '../App';
import { connect } from 'react-redux';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        this.setState({todos: this.state.todos});
    }

    render() {
        return (
            <div className="todo-list">
                {this.state.todos.map((todo) => (
                    <div key={todo.id}>{todo}</div>
                ))}
            </div>
        );
    }
}