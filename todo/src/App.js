import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List:</h1>
        <form>
          <input type="text" placeholder="Add todo"/>
        </form>
        <div>{this.props.todos}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);
