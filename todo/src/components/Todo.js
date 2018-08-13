import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Todo = ({ todo, toggleCompleted }) => {
  return (
    <div>
      <p style={{textDecoration: todo.completed ? 'line-through' : 'none'}} onClick={() => toggleCompleted(todo.id)}>{todo.value}</p>
    </div>
  )
}

export default connect(
  null,
  actions
)(Todo);