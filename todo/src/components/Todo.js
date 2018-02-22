//It is easier to define presentational components as functional components
import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Todo.css';

const Todo = ({ onClick, completed, text }) => (
  <li
  onClick={onClick}
  style={ {
    textDecoration: completed ? 'line-through' : 'none'
  }}
  >
    {text}
    <button className="button">Delete</button>
  </li>
)

Todo.propTyles = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;