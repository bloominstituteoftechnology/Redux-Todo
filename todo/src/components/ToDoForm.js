import React, { Component } from 'react';

export default class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    render() {
        <form className="form-wrapper">
            Todo: <input type="text" name="todoItem" />
            <button type="button" onClick={this.handleSubmitTodo}>Add</button>
        </form>
    }
}