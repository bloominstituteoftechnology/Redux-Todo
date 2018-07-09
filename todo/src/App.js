import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { todosReducer } from './reducers/index';

class App extends Component {
  render() {
    return (
      <div className="App">
      React Todo App
      < br/>
      <input type="text"/>
      <ul>
        {this.props.todos.payload.map( todo => <li>{todo}</li>)}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todos: state
  };
};
export default connect(mapStateToProps, {todosReducer})(App);
