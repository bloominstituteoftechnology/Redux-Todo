import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To Do</h1>
        <Form />
        <List />
      </div>
    );
  }
}
 export default App;