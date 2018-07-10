import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from '../actions/addTodo';

class TodoForm extends Component {

  onAddTodo = e => {
    e.preventDefault();
    const formInput = document.querySelector('#newTodo');
    const todo = {
      value: formInput.value,
      completed: false
    }
    console.log('todo', todo);
    this.props.addTodo(todo);
    formInput.value = '';
  };

  render() {
    return (
      <form className="todo-form">
        <input id="newTodo" className="todo-form__input" type="text" placeholder="Enter your to-do" />
        <button type="submit" onClick={(e) => this.onAddTodo(e)}>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(TodoForm);