import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

import './App.css';
import TodoForm from './components/TodoForm';

class App extends Component {
  
  render() {
    console.log(this.props.todos);
    return (
      <div className="App">
        <h1>Todo List:</h1>
        <TodoForm addTodo={this.props.addTodo} />
        <ul>
          {this.props.todos.map(todo => <div>{todo.value}</div>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo })(App);
