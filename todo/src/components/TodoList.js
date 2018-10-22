import React from 'react';
import Todo from './Todo';

import { connect } from 'react-redux'


const TodoList = props => {
  return (
    <div className='todo-list'>
  {props.todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </div>
  )
}
export default TodoList;
