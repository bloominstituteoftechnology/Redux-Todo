import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const Todos = props => {
  return <ul>
  {props.todos.map(todo => (
    <Todo key={todo.id} todo={todo} />
  ))}
  </ul>

}

export default Todos;
