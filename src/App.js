import React, { Component } from 'react';

import Form from './components/form';
import Todos from './components/todos';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos />
        <Form />
      </div>
    );
  }
}

export default App;
