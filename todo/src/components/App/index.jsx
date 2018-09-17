import React, { Component } from 'react';
import TodoList from '../TodoList';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <TodoList />
      </div>
    );
  }
}

export default App;
