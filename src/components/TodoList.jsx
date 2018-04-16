import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

let input

const TodoList = props => (
  <div>
    <form
      onSubmit={e => {
        props.addTodo(input.value)
        e.preventDefault()
      }}
    >
      <input ref={node => (input = node)} placeholder='New todos here' />
    </form>
    {props.todos.map((todo, i) => <Todo {...todo} key={i} />)}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}
export default connect(null, { addTodo })(TodoList)

TodoList.propTypes = {
  addTodo: PropTypes.func
}
