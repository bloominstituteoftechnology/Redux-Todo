import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="title-con">
          <h1>Todo List:</h1>
        </div>
        <div className="todo-con">
          <TodoForm addTodo={this.props.addTodo} />
          <TodoList todos={this.props.todos}/>
        </div>
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
