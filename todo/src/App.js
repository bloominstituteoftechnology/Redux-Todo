import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <TodoForm />
        <TodoItem />
      </div>
    );
  }
}

export default App;
