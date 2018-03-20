import React, { Component } from 'react';
import TodoList from './containers/TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          Everybody Wang Chung tonight!
          <TodoList />
      </div>
    );
  }
}

export default App;
