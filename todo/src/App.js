import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List</h1>
        </header>
        <form>
          <input></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {};
}

export default connect(mapStatetoProps, { })(App);
