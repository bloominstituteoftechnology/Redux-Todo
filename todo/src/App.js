import React, { Component } from 'react';
import './App.css';
import SubmitTodo from './SubmitTodo.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SubmitTodo />
      </div>
    );
  }
}

export default App;
