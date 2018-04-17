import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './Todo/ToDo';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [{}]
    };
  }

  render() {
    return (
      <div className="App">
        <ToDo />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    savedList: state.savedList
  };
};

const mapDispatchToProps = () => {
  return {
    addToDo,
    updateToDo
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(App);
