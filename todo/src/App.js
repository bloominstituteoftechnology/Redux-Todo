import React, { Component } from 'react';

import './App.css';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todos:</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
