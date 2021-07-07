import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TODOS from './components/todos';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TODOS />
      </div>
    );
  }
}

export default App;
