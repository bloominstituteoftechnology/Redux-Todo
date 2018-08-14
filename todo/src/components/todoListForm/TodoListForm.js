import React, { Component, Fragment } from "react";

export default class TodoListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Hey", "hey"],
      newTodo: ""
    };
  }

  inputChangeHandler = event => {
    console.log("Input Change Handler", event.target.value);
    this.setState({ newTodo: event.target.value });
  };
  render() {
    console.log("NewTodo", this.state.newTodo);
    return (
      <Fragment>
        <form>
          <input
            placeholder="add todo to list..."
            onChange={this.inputChangeHandler}
            value={this.state.newTodo}
          />
          <button>Enter</button>
        </form>
      </Fragment>
    );
  }
}
