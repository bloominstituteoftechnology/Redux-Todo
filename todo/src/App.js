import React, { Component } from 'react';

import TodoSubmitter from './TodoSubmitter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
           <p>What would you like to do today?</p>
           <TodoSubmitter />
        </header>
      </div>
    );
  }
}

export default App;

// onClick toggle completed from false to true, when switching to true, add a strikethrough.
// stretch: add a delete button