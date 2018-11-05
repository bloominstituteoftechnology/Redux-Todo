import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/todoList';
import TodoForm from './components/todoForm'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div><h1 >Lets Get it DONE</h1></div>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return state
}
  export default connect(mapStateToProps)(App) 
