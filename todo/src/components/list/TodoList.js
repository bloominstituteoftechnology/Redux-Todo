import React from 'react';
import TodoItem from '../item/TodoItem';
import { ListSpace } from './styles';

function TodoList(props) {
  return (
      <ListSpace>
        {props.todos.map((todo) => {
          return (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              completed={todo.completed.toString()}
              clickHandler={props.clickHandler}
              important={todo.important.toString()}
              importantHandler={props.importantHandler}
            />
          );
        })}
      </ListSpace>
  );
}

export default TodoList;
