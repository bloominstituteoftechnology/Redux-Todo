import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';


import ToDoList from './Containers/ToDoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.toDoList}</h1>
        <ToDoList />
      </div>
    );
  }
}


function mapStatetoProps(state) {
  return {
    toDoList: state.title
  }
}

export default connect(mapStatetoProps, {})(App);