import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import TodoList from './containers/todoList';
import TodoForm from './containers/TodoForm';
import { addTodo } from './actions/index';

class App extends Component {

  submit = values => {
    // print the form values to the console
    console.log(values.todoText)
    console.log(this.props)
    this.props.addTodo(values.todoText)
  }

  render() {
    return (
      <div className="App">
      <TodoForm onSubmit={this.submit} />
      <TodoList todos= {this.props.todos} />
      </div>
    );
  }
}

//const mapStateToProps = state =>({ todos : state.todos })
export default connect(null,{addTodo})(App);
