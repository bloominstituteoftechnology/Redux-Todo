import React, { Component } from 'react';
import './App.css';
import TodoSubmit from './TodoSubmit.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoSubmit />
      </div>
    );
  }
}

export default App;