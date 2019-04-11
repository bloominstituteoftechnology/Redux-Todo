import React, { Component } from "react";
import "./App.css";
import TodosList from "./components/TodosList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodosList />
      </div>
    );
  }
}

export default App;
