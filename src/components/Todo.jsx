import React from 'react'
import { removeTodo } from '../actions'
import { connect } from 'react-redux'

const Todo = props => (
  <div>
    <p>{props.value}</p>
    <button onClick={() => props.removeTodo(props.value)}>finish me</button>
  </div>
)

export default connect(null, { removeTodo })(Todo)
