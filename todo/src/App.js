import React, { Component } from "react";
import "./App.css";

import TodoList from './containers/TodoList';


class App extends Component {
  render() {
    return (
        <TodoList />
    );
  }
}

export default App;
