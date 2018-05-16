import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: ""
    };
  }

  handleTodoItemChange = e => {
    this.setState({ todoItem: e.target.value });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.todoItem); // this will be our action
    this.setState({ todoItem: "" });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Todo Item"
          type="text"
          value={this.state.todoItem}
          onChange={this.handleTodoItemChange}
        />
        <button onClick={this.handleAddTodo}>Add Todo Item</button>
      </div>
    );
  }
}

export default connect(null, { addTodo } )(AddTodo);