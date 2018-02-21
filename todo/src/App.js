import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo List</h1>
        </header>
        <Container />
      </div>
    );
  }
}

export default App;