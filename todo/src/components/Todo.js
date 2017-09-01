import React from 'react'
import {connect} from 'react-redux'

import {deleteTodo, completeTodo} from '../actions'

const Todo = ({todo, index, completed, deleteTodo, completeTodo}) => (
  <div>
    <h1>{todo.value}</h1>
    <h4>Complete? {completed ? 'true' : 'false' }</h4>
    <button onClick={() => deleteTodo(index)}>Delete</button>
    <button onClick={() => completeTodo(index)}>Complete</button>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  completed: state.todos[ownProps.index].completed
})

export default connect(mapStateToProps, {deleteTodo, completeTodo})(Todo)
