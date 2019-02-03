import React, { Component } from 'react';

import './App.css';
import Todos from './components/Todos';
import Form from './components/form';

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
