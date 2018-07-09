import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from './actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todos</h1>
        </header>
      </div>
    );
  }
}

const appProps = state => {
  return {
    todos: state
  };
};

export default connect(appProps)(App);