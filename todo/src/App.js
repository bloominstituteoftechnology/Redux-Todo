import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <ol>
          {this.props.todoList.todos.map(todo => <li>{todo.value}</li>)}
        </ol>
      </div>
    );
  }
};

const mapStatetoProps = (state) => {
  return {
    todoList: state
  }
} 

export default connect(mapStatetoProps)(App);
