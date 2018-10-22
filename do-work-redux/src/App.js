// Dependencies
import React, { Component } from 'react';
// Components
import Sidebar from './components/layout/Sidbar';
import TaskContainer from './components/layout/TaskContainer';
// Stylex
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <TaskContainer />
      </div>
    );
  }
}

export default App;
