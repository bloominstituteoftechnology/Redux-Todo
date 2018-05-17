import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Todo</h1>
        </header>
        <div className="App-intro">
          <Todos />
        </div>
      </div>
    );
  }
}

export default App;
