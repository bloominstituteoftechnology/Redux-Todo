import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTodo, completeTodo, deleteTodo } from './actions';

import Form from './components/Form'
import Todos from './components/Todos'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    }
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  submitHandler = event => {
    event.preventDefault();
    if (this.state.todo !== '') {
      let newTodo = {
        text: this.state.todo,
        completed: false,
        id: this.props.todos.length
      }
      this.props.addTodo(newTodo);
      this.setState({
        todo: ''
      })
    }
    event.target.reset();
  }


  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <Form changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        <Todos todos={this.props.todos} completeTodo={this.props.completeTodo} deleteTodo={this.props.deleteTodo}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, {addTodo, completeTodo, deleteTodo})(App);