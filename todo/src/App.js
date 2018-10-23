import React, { Component } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoDisplay from "./components/TodoDisplay";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoDisplay />
      </div>
    );
  }
}

export default App;
