import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTodo, removeTodo } from '../actions/actions';

export const Todo = props => {
  return (
    <div>
      <label completed={props.completed} onClick={() => props.updateTodo(props)}>{props.value}</label>
      <button onClick={() => props.removeTodo(props.value)}>...</button>
    </div>
  )
}

export default connect(null, { removeTodo })(Todo);