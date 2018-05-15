import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo List</h1>
        </header>

        <AddTodo/>
      </div>
    );
  }
}

export default App;
