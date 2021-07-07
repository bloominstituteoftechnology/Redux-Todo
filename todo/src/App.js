import React, { Component } from 'react';

import ListTodo from './ListTodo'
import Form from './Form'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListTodo />
        <Form />
      </div>
    );
  }
}

export default App;
