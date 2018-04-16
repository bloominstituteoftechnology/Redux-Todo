import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

const TodoList = props => (
  <div>{props.todos.map((todo, i) => <Todo value={todo.value} key={i} />)}</div>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}
export default TodoList
