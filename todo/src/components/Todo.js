import React from 'react'
import PropTypes from 'prop-types'
import {  ListGroupItem } from 'reactstrap';

const Todo = ({ onClick, completed, text }) => (
  <ListGroupItem
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </ListGroupItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
