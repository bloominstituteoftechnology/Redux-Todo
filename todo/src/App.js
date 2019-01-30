import React, { Component } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import './css/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
