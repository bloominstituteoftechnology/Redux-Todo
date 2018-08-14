import React, { Component } from 'react';
import {connect} from 'react-redux';
import TodoForm from './components/TodoForm';
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
        <p className="App-intro">
          Task List here
        </p>
        <TodoForm />
      </div>
    );
  }
}

export default App;