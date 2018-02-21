import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoItem from './todo-item';

class ToDoList extends Component {
  render() {
    return (
      <ul>
        Todo list here
        {this.props.todos.map((todo, i) => {
          return (
            <li key={i}>
              {todo.value}
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(ToDoList)