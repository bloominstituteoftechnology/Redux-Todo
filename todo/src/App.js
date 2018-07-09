import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class App extends Component {
  render() {
    console.log("Props in App:", this.props);
    return (
      <div className="App">
        <h1>Something is actually here</h1>
        <ul>{this.props.todos.map(todo => {
          return <li>{todo}</li>
        })}</ul>
        <form>
          <input type="text" name="todo" placeholder="todo..."/>
          <button type="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("State in Redux Store:", state);
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(App);
