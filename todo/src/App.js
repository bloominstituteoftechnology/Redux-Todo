import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, createTodo } from './actions';
import './App.css';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    console.log(this.props.todos)
    return (
      <div>
        <h1>TODO LIST</h1>
        {this.props.todos.map(todo => 
          <li>{todo}</li>
        )}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    todos: state 
  };
};

export default connect(mapStateToProps, { fetchTodos, createTodo})(App);
