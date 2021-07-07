import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form/form.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: [],
    }
}
  render() {
    return (
      <div className="App">
        <Form todoList={this.state.todos}/>
      </div>
    );
  }
}

export default App;

=