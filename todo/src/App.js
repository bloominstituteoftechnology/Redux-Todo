import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <List />
        </header>
      </div>
    );
  }
}

export default App;
