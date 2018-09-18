import React from 'react';
import PropTypes from 'prop-types';

const Todo = props => {
  return <li key={props.todo.id}>{props.todo.text}</li>;
}

export default Todo;
