import React from 'react'
import { connect } from 'react-redux'

import { toggleTodo } from '../actions/actions'
import { deleteTodo } from '../actions/actions'

const Todo = props => {
  let complete = props.completed ? "complete" : null
  return (
    <ul className="collection">
      <li className={`collection-item center-align`}>
        <span
          onClick={() => props.toggleTodo(props.id)}
          className={`${complete} center-align`}
        >
          {props.todo}
        </span>{" "}
        <i
          onClick={() => props.deleteTodo(props.id)}
          className="material-icons center-align"
        >
          clear
        </i>
      </li>
    </ul>
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
