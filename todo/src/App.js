import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        {/* todo list */}
        <div className="todolist">
          <ul>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
