import React, { Component } from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions";

class ToDoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  handleAdd = event => {
    event.preventDefault();
    this.props.addToDo({ value: this.state.todo, completed: false });
    this.setState({ todo: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleAdd}>
        <input
          onChange={event => this.setState({ todo: event.target.value })}
          name="value"
          value={this.state.todo}
          placeholder="Enter Something todo!"
        />
        <button>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addToDo }
)(ToDoForm);
