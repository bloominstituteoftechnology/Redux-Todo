import React, { Component } from "react";
import "./App.css";

import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
