import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";
import TodoList from "./components/TodoList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>Todo</h1>
        <TodoList todos={this.props.todos} />
      </div>
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
  { addTodo }
)(App);
