import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/todoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return state
}
  export default connect(mapStateToProps, {})(App) 
