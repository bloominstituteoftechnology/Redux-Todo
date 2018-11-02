import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "./actions/action";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoHeader />
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

const mapToState = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapToState,
  { deleteTodo }
)(App);
