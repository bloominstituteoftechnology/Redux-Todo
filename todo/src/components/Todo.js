import React from "react";

const Todo = props => {
  return (
      <li style={props.todo.completed ? { textDecoration: 'line-through' } : null }
          // onClick={ () => props.toggleCompleted(props.todo.id) }>
          onClick={ () => console.log(props.todo.id) }>
        {props.todo.value}
      </li>
  ); 
}

export default Todo;