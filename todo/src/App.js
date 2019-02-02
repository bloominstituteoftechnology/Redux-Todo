import React, { Component } from 'react';
import { connect } from 'react-redux'

import TodoList from './containers/TodoList'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>{this.props.myTodo}</h1>
        <TodoList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { myTodo: state.title }
}

export default connect(mapStateToProps, {})(App);
