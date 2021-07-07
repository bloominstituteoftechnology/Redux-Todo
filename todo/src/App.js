import React, { Component } from 'react';
import DisplayTodos from './components/DisplayTodos';
import TodoInput from './components/TodoInput';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoInput />
        <DisplayTodos />
      </div>
    );
  }
}

export default App;
