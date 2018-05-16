import React, { Component } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";

class AddTodo extends Component {
  state = {
    todo: ""
  };

  handleTodoInput = e => {
    this.setState({ todo: e.target.value });
  };

  addTodo = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state.todo); 
    this.setState({ todo: "" });
  };

  render() {
    // console.log(this.state)
    return (
      <div>
        <input
          placeholder="What is next?"
          type="text"
          value={this.state.todo}
          onChange={this.handleTodoInput}
        />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}


export default connect(null, { createTodo })(AddTodo);
