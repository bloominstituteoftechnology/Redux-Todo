import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

import { connect } from 'react-redux';
import { getTodos } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To Do:</h1>
        </header>
        <NewTodo/>
        <TodoList todo={this.props.todo}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps,{ getTodos })(App);