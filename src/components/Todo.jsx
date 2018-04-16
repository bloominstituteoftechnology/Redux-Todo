import React from 'react'
import { removeTodo } from '../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Todo = props => (
  <div>
    <p>{props.value}</p>
    <button onClick={() => props.removeTodo(props.value)}>finish me</button>
  </div>
)

Todo.propTypes = {
  value: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default connect(null, { removeTodo })(Todo)
