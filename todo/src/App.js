import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Header from './components/Header';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
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
