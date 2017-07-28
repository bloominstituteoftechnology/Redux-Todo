import React, { Component } from 'react';

import TodoList from './TodoList'

import logo from '../art/logo.svg';
import '../css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <h2>THE TRUNK OF A DOM TREE GROWS FROM THE <a href="https://youtu.be/v2f8kd1d278?t=7s">ROOT</a> OF THE PROJECT</h2>
          <h4>index.html >>> src/index.js >>> src/App.js</h4>
        </nav>
        <div className="App-header">
          <img src={logo}
               className="App-logo"
               alt="logo" />
          <h3>Welcome to Lambda School's LS-Redux Project</h3>
          <h5>prepare to have your MIND === BLOWN !!!</h5>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
