import React, { Component } from 'react';
import ToDoForm from './components/ToDoForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoForm />
      </div>
    );
  }
}

export default App;
