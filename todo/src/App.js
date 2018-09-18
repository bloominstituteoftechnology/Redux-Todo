import React, { Component } from 'react';

import './App.css';
import AddTodo from '../containers/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Todo App!</h1>
        </header>
        <AddTodo />
      </div>
    );
  }
}


export default (App);
