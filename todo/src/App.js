import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import AddTodo from './containers/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <AddTodo />

        <ToDoList />
        
      </div>
    );
  };
};

export default App;
