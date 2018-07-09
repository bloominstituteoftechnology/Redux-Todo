import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import './App.css';

class App extends Component {
  render() {
    console.log('app.js props', JSON.stringify(this.props));
    console.log('app.js state', JSON.stringify(this.state));
    return (
      <div className="App">
        {this.props.todos.map(t => <div>{t.value}</div>)}
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
