import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputText: ""
        }
    }

    changeHandler = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    };

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.addTodo(this.state.inputText);
        this.setState({ inputText: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.inputText}
                    placeholder="New to-do item"
                    onChange={this.changeHandler}
                    name="inputText"
                />
                <button type="submit">Add Item</button>
            </form>
        );
    }
}

export default connect(null, { addTodo })(TodoForm);