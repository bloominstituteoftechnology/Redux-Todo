import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import AddItem from './components/AddItem';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ToDoList />
      <AddItem />
      </div>
    );
  }
}

export default App;
