import React, { Component } from 'react';

import './App.css';
import TaskList from './components/TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do App</h1>
        </header>
        <TaskList />
      </div>
    );
  }
}

export default App;
