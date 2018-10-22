import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions/index';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList listArray={this.props.store.listArray} />
        <TodoForm addTask={this.props.addTask} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { store: state };
};

export default connect(mapStateToProps, { addTask })(App);
