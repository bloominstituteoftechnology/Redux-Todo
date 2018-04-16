import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import AddTodo from './containers/addTodo';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kaitlyn's To Do List</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
        {/* <AddTodo /> */}
      </div>
    );
  }
}

export default App;
