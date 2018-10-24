
// Basic React
import React, { Component } from 'react';
// Dependencies
import './App.css';
import ToDo from './components/todo.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ToDo />
      </div>
    );
  }
}

export default App;
