import React, { Component } from 'react';
import TodoList from './components/TodoList';
import './App.css';
import TodoSubmitter from './components/TodoSubmitter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>What would you like to do today? </p>
          <TodoList />
          <TodoSubmitter />
        </header>
      </div>
    );
  }
}

export default App;
