import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Todo App</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
