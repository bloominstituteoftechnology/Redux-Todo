import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <h1>Testing</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todoItems
});

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoApp);
