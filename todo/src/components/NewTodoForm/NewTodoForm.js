import React, { Component } from "react";

export default class NewTodoForm extends Component {
  render() {
    return (
      <div>
        <input type="text" name="newTodo" />
        <button type="submit">SUBMIT</button>
      </div>
    );
  }
}
