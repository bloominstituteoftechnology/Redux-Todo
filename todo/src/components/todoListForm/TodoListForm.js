import React, { Component, Fragment } from "react";

export default class TodoListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Hey", "hey"]
    };
  }

  render() {
    return (
      <Fragment>
        <form>
          <h4>Add to Todo List</h4>
          <input placeholder="add todo to list..." />
          <button>Enter</button>
        </form>
      </Fragment>
    );
  }
}
