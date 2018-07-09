import React, { Component } from "react";

export default class NewTodoForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="newTodo" placeholder="Add TODO..." />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}
