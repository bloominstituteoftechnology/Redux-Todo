import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import todos from '../reducers/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input placeholder="Enter Task" />
        <button>Add Task</button>
        {/* <ul>
          <li></li>
        </ul> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todos: state
  };
};

export default connect(mapStateToProps, {})(App);