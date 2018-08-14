import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todo: state
  };
};

export default connect(mapStateToProps, {})(App);
