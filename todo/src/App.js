import React, { Component } from 'react';
import ToDo from './components/ToDo.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ToDo />
      </div>
    );
  }
}

export default App;
