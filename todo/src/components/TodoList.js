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
    <ul>
      {props.todos.map(item => <Todo todo={item} />)}
    </ul>
    )
  }
}

export default TodoList;
