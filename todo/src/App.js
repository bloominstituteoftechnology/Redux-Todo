import React, { Component } from 'react';
import './App.css';
import Taskbar from './Taskbar.js';
import Tasklist from './Tasklist.js'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Todo List Redux</h1>
        <Taskbar />
        <Tasklist /> 
        
      </div>
    );
  }
}

export default App;
