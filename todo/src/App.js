import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './component/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
      </div>
    );
  }
}

export default App;
