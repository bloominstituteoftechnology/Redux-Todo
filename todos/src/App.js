import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { submitToDo } from './reducers';

class App extends Component {
  render() {
    return (
      <div className="ToDoList">
      <input type="text" placeholder='Add your To Dos here!'></input>
      <button>Submit</button>
      </div>
      // <div>
      //   Add Task list here
      // </div>
    );
  }
}

export default App;
