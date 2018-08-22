import React, { Component } from 'react';
import './App.css';
import Display from './Containers/Display';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Display />
      </div>
    );
  }
}

export default App;
