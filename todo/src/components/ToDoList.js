import React from 'react';

const ToDoList = (props) => {
// console.log(props)
  return (
    <div>
      {props.list.toDos.map(todo => (
      <ul key={todo.id}>
        <li 
          onClick={() => props.list.toggleCompleted(todo.id)}
          style={todo.completed ? {textDecoration:"line-through"} : {textDecoration:"none"}}
        >
          {todo.todo}
        </li>
        <button onClick={() => props.list.deleteToDo(todo.id)}>remove</button>
      </ul>
    ))}
    </div>
  )
}


export default ToDoList