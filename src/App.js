import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos />
        <AddTodo />
      </div>
    );
  }
}

export default App;
