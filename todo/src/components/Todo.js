import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/actions'



const Todo = props => {
  return (
    <span>
      <input onChange={() => props.addTodo(props.id)} type="text" />
      {props.todo}
    </span>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  { addTodo }
)(Todo)
