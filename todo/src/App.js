import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Add_todo } from './ActionCall';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and {this.props.note}
          <button onClick={() => {Add_todo()}}> . </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (note) => {
  return {
      note: note
  };
};

export default connect(mapStateToProps, { Add_todo })(App);
