import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './containers/TodoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoContainer />
      </div>
    );
  }
}

export default App;
