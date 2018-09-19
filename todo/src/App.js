import React, { Component } from 'react';
import './App.css';
import TaskContainer from './containers/TaskContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Redux Todo App</h1>
       <TaskContainer />
      </div>
    );
  }
}

export default App;
