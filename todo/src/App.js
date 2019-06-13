import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './containers/TodoList';
import Todo from './containers/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          <TodoList />
          <Todo />
        </p>
      </div>
    );
  }
}

export default App;
