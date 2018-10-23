import React, { Component } from 'react';
import TodoContainer from './components/TodoContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoContainer />
      </div>
    );
  }
}

export default App;
