import React, { Component } from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";

import "./App.css";

import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoData: state.todo
  };
};

export default connect(mapStateToProps)(App);
