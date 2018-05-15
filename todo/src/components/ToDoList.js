import React from 'react';

const ToDoList = (props) => {
console.log(props)
  return (
    <ul>
      {props.list.toDos.map(todo => (
      <li 
        key={todo.id}
        onClick={() => props.list.toggleCompleted(todo.id)}
      >
        {todo.todo}
      </li>))}
    </ul>
  )
}


export default ToDoList