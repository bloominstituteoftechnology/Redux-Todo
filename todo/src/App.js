import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addNewTodo } from "./actions";

import TodoContainer from "./components/TodoContainer/TodoContainer";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        APP
        <NewTodoForm />
        <TodoContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN APP", state);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addNewTodo }
)(App);
