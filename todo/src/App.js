import React, { Component } from 'react';
import Todolist from './components/todolist';
import Form from './components/form'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todolist/>
        <Form/>
      </div>
    );
  }
}

export default App;
