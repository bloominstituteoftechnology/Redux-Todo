import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class App extends Component {
  render() {
    return (
      <div className="TodoList">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}
export default App;
