import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";

import {createList} from "./actions";
import AddToDo from './components/AddToDo';



class App extends Component {



  componentDidMount() {
    this.props.createList();
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul className="App-intro">
          {this.props.todos.map( (todo, index) => <li key={index}>{todo}</li>)}
        </ul>
        <AddToDo/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    todos: state
  };
};






export default connect(mapStateToProps, {createList})(App);
