import React, { Component } from "react";
import "./App.css";
import TodoList from "./containers/TodoList";
import TodoForm from "./containers/Form";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header-img" />
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
