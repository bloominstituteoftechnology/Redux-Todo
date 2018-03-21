import React, { Component } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import TodoListComponent from "./components/TodoListComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListComponent />
        <FormComponent />
      </div>
    );
  }
}

export default App;
