import React from 'react'
import Todo from './Todo'

export default props => (
  <div>
    {props.todos.map((todo, i) => (
      <Todo value={todo.value} key={i} onComplete={props.removeTodo} />
    ))}
  </div>
)
