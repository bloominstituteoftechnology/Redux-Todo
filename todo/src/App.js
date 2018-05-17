import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import TodoList from './Components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Redux Todo">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Todo />
        </div>
      </div>

    );
  }
}

export default App;
