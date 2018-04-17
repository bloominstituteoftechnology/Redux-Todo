import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addtodo, removetodo, getToDos } from './action/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input 
        type='text' 
        placeholder='Add ToDo' 
        name='ToDo' 
        onChange='function'/>
        <button onClick={() => this.props.addtodo()}> Add ToDo </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todos: state
  };
};

export default connect(mapStateToProps, { addtodo, removetodo, getToDos })(App);
