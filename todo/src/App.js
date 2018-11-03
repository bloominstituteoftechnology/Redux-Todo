import React, { Component } from 'react';
import './App.css';

import Form from './components/Form'
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Form />
       <List />
      </div>
    );
  }
}

export default App;
