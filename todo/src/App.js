import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Todo App</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
