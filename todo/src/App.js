import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to Lambda School's LS-Redux Project</h3>
          <h5>prepare to have your MIND === BLOWN !!!</h5>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
