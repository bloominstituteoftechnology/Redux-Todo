import React, { Component } from 'react';

import './App.css';
import AddTodo from './containers/AddTodo';
import Todos from './containers/Todos';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <AddTodo/>
        <Todos/>
      </div>
    );
  }
}

export default App;
