import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const App = props => {
  return (
    <div className="App">
      {props.todos.map(todo => <div>{todo.text}</div>)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state
  };
}



export default connect(mapStateToProps)(App);
