import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo, toggleComplete } from "../actions";

class TodoForm extends Component {
  state = {
    newTodo: {
      todo: "",
      completed: false
    }
  };

  onChange = e => {
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        todo: e.target.value
      }
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state);

    this.setState({
      newTodo: {
        ...this.state.newTodo,
        todo: ""
      }
    });
  };

  toggleComplete = index => {
    this.props.toggleComplete(index);
  };

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input
          type="text"
          name="todo"
          value={this.state.newTodo.todo}
          onChange={this.onChange}
        />
        <input type="button" value="Add Todo" onClick={this.addTodo} />
      </form>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todoList: state.todoList
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleComplete }
)(TodoForm);
