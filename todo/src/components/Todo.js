import React from 'react';


const Todo = props => {
 //obj should be arr
  return (
   <div>
   <h1>{props.todo}</h1>
   <button onClick={() => props.deleteTodo(props.index)} >Remove Todo</button>
   <button onClick={() => props.toggleTodo(props.index)} type="submit">
    Toggle Todo
   </button>
   </div>
  )
}


export default Todo 
