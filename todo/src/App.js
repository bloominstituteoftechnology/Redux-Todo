import React, { Component } from 'react';
import './App.css';
import TodoList from './containers/todoList';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="App">
      <TodoList todos= {this.props.todos} />
      </div>
    );
  }
}

export default connect()(App);
