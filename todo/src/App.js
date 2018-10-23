import React, { Component } from 'react';
import TodoWrapper from './components/TodoWrapper'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoWrapper />
      </div>
    );
  }
}

export default App;
