import React from 'react';

const ToDoList = (props) => {
// console.log(props.list)
  return (
    <ul>
      {props.list.map(todo => <li key={todo.todo}>{todo.todo}</li>)}
    </ul>
  )
}


export default ToDoList