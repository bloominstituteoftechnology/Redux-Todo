import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions/index';

import TodoForm from './components/TodoForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm addTask={this.props.addTask} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { listArray: state };
};

export default connect(mapStateToProps, { addTask })(App);
