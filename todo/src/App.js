import React, { Component } from 'react';
import './App.css';
import { add } from './actions/actions'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>To-do List</h2>
          <TodoList />
        </header>
      </div>
    );
  }
}

export default App;
