import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {addToDo, hideToDo} from './action';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
          <li>wash dist</li>
          <li>wash dist</li>
          <li>wash dist</li>
         <li>wash dist</li>


      </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        todoList: state
    };
};


export default connect(mapStateToProps, {addToDo, hideToDo})(App);
