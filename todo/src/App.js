import React, { Component } from 'react';
import { addTodoItem, markComplete } from './actions';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends Component {
  state = {
    newTodo: '',
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addTodoItem(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList />
        <TodoForm
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
          text={this.state.newTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    id: state.id,
  };
};

export default connect(
  mapStateToProps,
  { addTodoItem, markComplete }
)(App);
