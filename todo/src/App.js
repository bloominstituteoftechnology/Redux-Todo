import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>{this.props.jamarsTitle}</h1>
      <TodoList />
      <TodoInput />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jamarsTitle: state.title
  };
}

export default connect(mapStateToProps)(App);
