import React, { Component } from "react";

import "./App.css";
import TodosList from "./components/TodosList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{ value: "Walk the do", completed: false }]
    };
  }
  updateState = (todo) => {
    this.setState({todos: [...this.state.todos, todo]})
  }
  render() {
    return (
      <div className="App">
        <TodosList updateState={this.updateState} />
      </div>
    );
  }
}

export default App;
