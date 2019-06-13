import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import  TodoList  from './containers/TodoList';



class App extends Component {
  render() {
    return (
      <div className="App">
      	<h1>Redux Todo List</h1>
      	<TodoList />
      </div>
    );
  }
}

export default App;
