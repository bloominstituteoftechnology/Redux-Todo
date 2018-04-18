import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './Actions';
import ToDoList from './components/todolist';
import ToDoForm from './components/todoform';

class App extends Component {
  constructor(props) { // props = entire project state correct?
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({todos: this.state.todos}); // setting todos to the todos found in state
  }

  addTodo = () => {
    return false;
  }

  render() {
    return (
      <div className="todo-wrapper">
        <div className="todo-header">
          <h1 className="title">TO DO APP</h1>
        </div>
        <div className="todo">
          <ToDoList />
          <ToDoForm />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, { addTodo, ToDoList })(App); // not sure about this line, but it works
