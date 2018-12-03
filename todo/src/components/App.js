import React, { Component } from "react";
import "./App.css";

import AddTodo from "../containers/addTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import ListButton from "./ListButtons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Redux TodoList</h1>
        <AddTodo />
        <VisibleTodoList />
        <ListButton />
      </div>
    );
  }
}

export default App;
