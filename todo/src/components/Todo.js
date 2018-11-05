import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/actions'
import { toggleTodo } from '../actions/actions'


const Todo = props => {
  return <li onClick={() => props.toggleTodo(props.id)}>{props.todo}</li>
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(Todo)
