//It is easier to define presentational components as functional components
import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Todo.css';
import RemoveTodo from '../containers/RemoveTodo';

const Todo = ({ onClick, completed, text, id }) => (
  <li
  onClick={onClick}
  style={ {
    textDecoration: completed ? 'line-through' : 'none'
  }}
  >
    {text}
    <RemoveTodo id={id}/>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo;