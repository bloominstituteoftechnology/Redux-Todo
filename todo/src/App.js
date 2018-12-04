import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    tasks: state.tasks
  }
);

export default connect(mapStateToProps, null)(App);
