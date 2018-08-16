import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import { connect } from "react-redux";
import { addTodo, toggleComplete } from './actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoInputText: ""
    };
  }

  todoInput = e => {
    this.setState({ todoInputText: e.target.value });
  };

  addTodoHandler = () => {
    this.props.addTodoOnProps(this.state.todoInputText);
    this.setState({
      todoInputText: ""
    });
  } ;

  handleTodoComplete = index => {
    this.props.toggleComplete(index);
  };

  render() {
    return (
      <div className="App">
        <h1>Get it Redone</h1>
        <TodoForm addTodo={this.addTodoHandler} inputText={this.state.todoInputText} onInputChange={this.todoInput} />
        <TodoList todos={this.props.todosOnProps} toggleCompleted={this.handleTodoComplete} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todosOnProps: state.todos
});

export default connect(
  mapStateToProps,
   { addTodoOnProps: addTodo, toggleComplete })(App);