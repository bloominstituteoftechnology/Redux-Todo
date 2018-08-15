import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoForm from './TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Redux Todo App</h1>
        </header>
        <p className="App-intro">
          {this.props.todos}
        </p>
        <TodoForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps)(App);
