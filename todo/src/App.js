import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import  { addTodo, toggleTodo, removeTodo }  from './actions'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoText: ''
    };
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  addTodoList = (e) => {
    e.preventDefault();
    if(this.state.todoText === '') {
      return;
    }
    const { todoText } = this.state;
    const newTodo = { 
      text: todoText,
      completed: false,
      id: this.props.todos.length + 1
     };
     this.props.addTodo(newTodo);
     this.setState({ todoText:""})
  }

  completedTodo = todoId => {
    console.log("id inside app", todoId);
    this.props.toggleTodo(todoId);
  }

  removeTodo = () => {
    this.props.removeTodo();
  }

  render() {
    return (
      <div className="App">
        <h1 className="header">My To Do List</h1>
        <TodoForm
          removeTodo={this.removeTodo} 
          changeHandler={this.changeHandler} 
          todoText={this.state.todoText}
          addTodoList={this.addTodoList} />
        <TodoList removeTodo={this.removeTodo} handleComplete={this.completedTodo} todos={this.props.todos} addTodoList={this.addTodoList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state)
  return {
      todos: state.todos
  };
};

export default connect(mapStateToProps, { 
    addTodo,
    toggleTodo,
    removeTodo
   })(App);
