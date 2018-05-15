import React, { Component } from 'react';
import Todos from './containers/Todos';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default App;
