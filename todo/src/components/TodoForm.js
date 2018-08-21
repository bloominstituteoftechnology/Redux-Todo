import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Add a Todo" />
        <button>Add a Todo</button>
      </div>
    );
  }
}

export default TodoForm;
