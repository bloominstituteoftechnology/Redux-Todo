import React from 'react'
import { removeTodo, updateTodo } from '../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Todo = props => (
  <div>
    <p
      style={
        props.completed
          ? { textDecoration: 'line-through' }
          : { textDecoration: 'none' }
      }
      onClick={() => {
        props.updateTodo(props)
      }}
    >
      {props.value}
    </p>
    <button onClick={() => props.removeTodo(props.value)}>X</button>
  </div>
)

Todo.propTypes = {
  value: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired
}

export default connect(null, { removeTodo, updateTodo })(Todo)
