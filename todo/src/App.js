import React, { Component } from "react";
import "./App.css";
import "./components/NewTodoForm/NewTodoForm";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        APP
        <NewTodoForm />
        <TodoContainer />
      </div>
    );
  }
}

export default App;
