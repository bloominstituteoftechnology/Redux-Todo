import React from 'react';
import TodoItem from '../item/TodoItem';

function TodoList(props) {
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {props.todos.map((todo) => {
          return (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              completed={todo.completed}
              clickHandler={props.clickHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
