import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from './action'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }

    valueChangedHandler = (e) => {
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.valueChangedHandler}
                    className="form-control"
                    placeholder="Todo"
                    value={this.state.value}
                    name="todo"
                    type="todo"
                />
                <button onClick={() => {
                    this.props.addTodo(this.state.value)
                    this.setState({ value: "" })
                }}>Add Todo</button>
            </div>
        );
    }

}

export default connect(null, { addTodo })(TodoForm);