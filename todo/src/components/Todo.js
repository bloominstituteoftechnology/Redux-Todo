import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/actions'
import { toggleTodo } from '../actions/actions'
import { deleteTodo } from '../actions/actions'


const Todo = props => {
  let complete = props.completed ? "complete" : null
  return (
    <div>
      <li className={complete} onClick={() => props.toggleTodo(props.id)}>
        {props.todo}{" "}
      </li>
      <button onClick={() => props.deleteTodo(props.id)}>Delete Todo</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  { toggleTodo, deleteTodo }
)(Todo)
