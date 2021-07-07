import React, { Component } from 'react';

import TodoContainer from './components/TodoContainer';
import TodoInput from './components/TodoInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Todo App</h2>
        <TodoInput />
        <TodoContainer />
      </div>
    );
  }
}

export default App;
