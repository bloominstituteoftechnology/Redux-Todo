import React, { Component } from 'react';
import DisplayTodos from './components/DisplayTodos';

class App extends Component {
  render() {
    return (
      <div className="app">
        <DisplayTodos />
      </div>
    );
  }
}

export default App;
