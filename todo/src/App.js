import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.todos.map((todo, i) => <div key={i}>{todo.value}</div>)}
        <button onClick={this.props.addTodo}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    addTodo: state.addTodo,
  };
};

export default connect(
  mapStateToProps,
  { addTodo },
)(App);
