import React from 'react';

const Todo = props => {
 return (
   <div>
   <h1 style={{textDecoration: props.completed || props.todo.id === props.index ? 'line-through': 'none'}}>{props.todo}</h1>
   <button onClick={() => props.deleteTodo(props.index)} >Remove Todo</button>
   {" "}
   <button onClick={() => props.toggleTodo(props.index)} type="submit">
    Toggle Todo
   </button>
   </div>
  )
  
}


export default Todo 
