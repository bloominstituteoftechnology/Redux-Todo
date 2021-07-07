import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';


import TodoContainer from './components/TodoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TO DO List</h1>
      <TodoContainer todos={this.props.todos.todos}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(App);
