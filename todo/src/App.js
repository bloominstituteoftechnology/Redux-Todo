import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/todosList';
import TodoInput from './components/todoInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App With Redux</h1>
        </header>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
