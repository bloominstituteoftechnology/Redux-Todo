import React, { Component } from 'react';
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
