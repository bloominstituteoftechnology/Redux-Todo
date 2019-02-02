import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

class App extends Component {
  addTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodoText);
  };
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
