import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {connect} from 'react-redux';
import {SUBMIT, CLEAR, COMPLETED} from './actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList store={this.props.store}/>
        <TodoForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('State', state);
  return {
    todos: state
  };
};

export default connect(mapStateToProps, {SUBMIT, CLEAR, COMPLETED})(App);
