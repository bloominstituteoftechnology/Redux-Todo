import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/todoList';
import TodoForm from './components/todoForm'
import TodoHeader from './components/todoHeader'



class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoHeader />
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
