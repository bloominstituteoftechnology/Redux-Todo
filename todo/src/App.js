import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { connect } from "react-redux";
import { toggleTodo } from "./actions/index";

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <TodoForm />
      <TodoList />
    </div>
  );
};

const mapStateToProps = state => {
  console.log("State in Redux Store", state);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo }
)(App);
