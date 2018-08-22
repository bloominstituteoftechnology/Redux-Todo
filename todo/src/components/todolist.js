import Todo from './Todo';
import React from 'react';


const TodoList = (props) => {
  if (props.todos.length === 0)
  {
    return (
      <div>Add a todo!</div>
    )
  }
  else if (props.todos.length !== 0)
  {
    return (
    <div>
      <p>Single click to strike off</p>
      <p>Double click to remove</p>
      <ul>
        {props.todos.map(item => <Todo todo={item} removecompleted={props.removecompleted} completed={props.completed} />)}
      </ul>
    </div>
    )
  }
}

export default TodoList;