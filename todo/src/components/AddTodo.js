import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handleSubmit = event => {
    this.setState({ text: event.target.value });
  };

  handleTodo = () => {
    const { text } = this.state;
    const newItem = { text, completeted: false, id: Date.now() };
    this.props.addTodo(newItem);
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleSubmit}
          placeholder="Add to do"
          value={this.state.text}
        />
        <button type="submit" onClick={this.handleTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
