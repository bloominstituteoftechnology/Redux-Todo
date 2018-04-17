import React, { Component } from 'react';
import DisplayTodos from './components/DisplayTodos';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Your Todo List</h1>
        </header>
        <DisplayTodos/>
      </div>
    );
  }
}

export default App;
