import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';



class App extends Component {
  render() {
    return (
      <div className="App">
      <TodoInput />
      <TodoList />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state
  };
}

export default connect(mapStateToProps)(App);
