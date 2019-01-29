import React, { Component } from "react";
import "./App.css";

import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
