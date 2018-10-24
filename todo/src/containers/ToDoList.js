import React from 'react';
import Todo from '../components/Todo';
import { updateToDoItem } from '../actions'
​
const ToDoList = ({ todos, updateToDoItem }) => (
  <ul>
   let todoArray = {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => updateToDoItem(todo.id)} />
    ))}
  </ul>
)


export default ToDoList
