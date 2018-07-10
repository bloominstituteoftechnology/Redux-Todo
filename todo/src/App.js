import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Todo List☮</h1>
          <TodoForm />
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
