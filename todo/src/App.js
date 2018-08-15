import React, { Component } from 'react';
import TodoGroup from './components/TodoGroup'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Getting Organized</h1>
          <p> Dynamic task list built with react and redux </p>
        </header>
          <div className = "app-content">
            <h3>
              Task List
            </h3>
            <TodoGroup />
          </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}

export default App;