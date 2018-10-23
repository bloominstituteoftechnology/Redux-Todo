import React, { Component } from "react";

import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
