import React, { Component } from "react";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoValue: ""
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ newTodoValue: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="newTodo"
            placeholder="Add TODO..."
            value={this.state.newTodoValue}
            onChange={this.handleChange}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}
