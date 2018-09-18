import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import logo from './logo.svg';
import TodoForm from './components/TodoForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoForm />
      </div>
    );
  }
}

export default App;
