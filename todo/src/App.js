import React, { Component } from "react";
import "./App.css";
import TodoList from "./containers/TodoList";
import TodoForm from "./containers/Form";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header-img" />
        {/* <TodoList tasks={this.state.tasks} clickHandler={this.clickHandler} /> */}
        <TodoForm />
      </div>
    );
  }
}

export default App;
