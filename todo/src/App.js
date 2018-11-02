import React, { Component } from 'react';
import logo from './d2rd-droid.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            D2rd ToDo
          </p>
          <a
            className="App-link"
            href="http://linked.com/in/gddaniel"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Me
          </a>
        </header>
      </div>
    );
  }
}

export default App;
