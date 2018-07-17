import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/todoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      todos:[],
      item:""
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>To Do List</h3>
        </header>
        <TodoForm/>
       
      </div>
    );
  }
}

export default App;
