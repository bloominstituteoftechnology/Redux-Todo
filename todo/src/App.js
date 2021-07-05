import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>To-do List</h2>
          <TodoList />
          <TodoForm />
        </header>
      </div>
    );
  }
}

export default App;
