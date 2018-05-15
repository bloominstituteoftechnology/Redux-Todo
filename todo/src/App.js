import React, { Component } from 'react';
import logo from './logo.svg';
import ToDoList from './components/ToDoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}

export default App;
