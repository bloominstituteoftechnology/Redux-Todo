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
            <div className="mb3">
              <h3>What do you need to do today?</h3>
              <form onSubmit={e => {
                e.preventDefault();
                this.props.addTodo(this.state.value);
                this.setState({ value: "" });
              }}>
                <input
                    onChange={this.valueChangedHandler}
                    className="form-control"
                    placeholder="Todo"
                    value={this.state.value}
                    name="todo"
                    type="todo"
                />
                <button>Add Todo</button>
              </form>
            </div>
        );
    }

}

export default connect(null, { addTodo })(TodoForm);