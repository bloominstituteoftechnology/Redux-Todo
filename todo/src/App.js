import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import './App.css';

const App = props => {
  console.log(props)
  return (
    <div className="App">
      <h1>Things TODO:</h1>
      <TodoList todolist={props.todolist} />
      <TodoItem />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    item: state.item,
    todolist: state.todolist
  }
}

export default connect(mapStateToProps)(App);
