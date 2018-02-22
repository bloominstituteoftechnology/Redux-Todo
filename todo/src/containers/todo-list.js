import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    todos: state,
  }
}

export default connect(mapStateToProps)(ToDoList)