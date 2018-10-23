import React, { Component } from 'react';
import ToDoForm from './containers/ToDoForm.js'
import ToDoList from './containers/ToDoList.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ToDoForm/>
      <ToDoList/>
      </div>
    );
  }
}

export default App;
