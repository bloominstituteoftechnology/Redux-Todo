import React, { Component } from 'react';
import{connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {addtodo, changecompleted} from '/actions/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    todos:state.todos
  }
}

export default connect(mapStateToProps, {addtodo, changecompleted})(App);
//pass actions into this as well once created