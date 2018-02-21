import React, { Component } from 'react';
import Header from './components/header/index';
import TodoForm from './components/todoform/index';
import ViewList from './components/viewlist/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <TodoForm />
      <ViewList />
      </div>
    );
  }
}

export default App;
