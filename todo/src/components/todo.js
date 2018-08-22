import React from 'react';
const Todo = (props) => {
  return (
    <li onDoubleClick={() => props.removecompleted(props.todo)} onClick={() => props.completed(props.todo)} className={ props.todo.completed ? 'line-through' : null}>
      {props.todo.value}
    </li>
  )
}
export default Todo;