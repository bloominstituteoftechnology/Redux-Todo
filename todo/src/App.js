import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo List</h1>
        </header>
        <div>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
