import React, { Component } from 'react';
import{connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {addtodo, changecompleted} from './actions/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       
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