import React, { Component } from 'react';
import './App.css';
import TodoList from './containers/TodoList';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <TodoList/>
      
      </div>
    );
  }
}

export default App;
