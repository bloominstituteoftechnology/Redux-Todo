import React, { Component } from 'react';
import TodoContainer from './containers/TodoContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Welcome to Todo</h1>
        </header>

        <TodoContainer />
      </div>
    );
  }
}

export default App;