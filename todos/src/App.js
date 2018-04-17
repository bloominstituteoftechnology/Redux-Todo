import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ToDoList">
      <input placeholder='Add your To Dos here!'></input>
      <button>Submit</button>
      </div>
      // <div>
      //   Add Task list here
      // </div>
    );
  }
}

export default App;
