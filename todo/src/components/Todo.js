import React from 'react'
import PropTypes from 'prop-types'
import {  ListGroupItem } from 'reactstrap';
import {connect} from 'react-redux';
import RemoveTodo from '../containers/RemoveTodo';

const Todo = ({ onClick, completed, text, id }) => (
  <ListGroupItem
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <RemoveTodo id = {id}/>
  </ListGroupItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo
