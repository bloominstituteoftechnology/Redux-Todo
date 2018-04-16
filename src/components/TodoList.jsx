import React from 'react'
import Todo from './Todo'

export default props => (
  <div>
    {props.todos.map(todo => (
      <Todo value={todo.value} onComplete={props.removeTodo} />
    ))}
  </div>
)
