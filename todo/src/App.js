import React, { Component } from 'react';
import './App.css';
import ToDoForm from './form/ToDoForm';
import ToDoList from './form/ToDoList'
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
