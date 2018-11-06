import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./containers/addTodo";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <AddTodo />
      </div>
    );
  }
}

export default App;
