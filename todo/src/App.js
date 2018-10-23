import React, { Component } from 'react';
import React, { Component } from "react";
import { connect } from 'react-redux';
import { addToDo, updateToDoItem } from '../actions';
import ToDoForm from './components/ToDoForm.js'
import ToDoList from './containers/ToDoList.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ToDoForm/>
      <ToDoList/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      toDoArray: state.toDoArray,
      value:'',
      completed:''
  };
};


export default connect(mapStateToProps, { addToDo, updateToDoItem})(App);
