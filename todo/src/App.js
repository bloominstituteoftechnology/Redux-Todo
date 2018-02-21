import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        value: 'Walk the dog.',
        completed: true,
      },
      {
        value: 'Buy milk.',
        completed: false,
      },
      {
        value: 'Relax.',
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <ItemList />
      </div>
    );
  }
}

export default App;
