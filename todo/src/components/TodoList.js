import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props)=> {
  const todos = props.todos.map((todo, item)=> {
    <TodoItem todo={todo} key={item} item={item}/>
  });
  return (
    <ul>
      {todos}
    </ul>
  );
};

export default TodoList;