import React, { Component } from 'react';

import { connect } from 'react-redux';
import './App.css';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput />
        <h1> Working</h1>
        <TodoList />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);
