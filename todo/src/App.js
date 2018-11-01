import React, { Component } from 'react';

import TodoList from './components/TodoList';
// import './App.css';


class App extends Component {
  
  render() {
    console.log( this.props );
    return (
      <div className="App">
        Redux-Todo - App
        <TodoList />
      </div>
    );
  }
}

export default App;
