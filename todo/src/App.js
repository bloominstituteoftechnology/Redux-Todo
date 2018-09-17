import React, { Component } from 'react';
import './App.css';

import Todos from './components/Todos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TODOS LIST</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
