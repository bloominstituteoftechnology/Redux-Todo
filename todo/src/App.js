import React, { Component } from 'react';
import TodoForm from './containers/TodoForm';
import TodoList from './containers/TodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
