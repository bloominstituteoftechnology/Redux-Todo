import React from 'react';
import { toggleTodo } from './actions';

const Todo = props => {
  console.log(props)
return (
  
  <h2>className={props.todos.completed ? 'completed' : 'not yet' } onClick={() => props.toggleTodo(props.todo.todo)}>{props.todo.todo}</h2>
)
}
export default Todo;