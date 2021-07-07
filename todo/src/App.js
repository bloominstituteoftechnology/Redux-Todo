import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoForm from './containers/TodoForm.js';
import TodoList from './containers/TodoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className='heading'>Fun Stuff</h2>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
