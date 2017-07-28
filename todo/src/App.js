import React, { Component } from 'react';
import TodoInput from './containers/todoInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoInput />
      </div>
    );
  }
}

export default App;
