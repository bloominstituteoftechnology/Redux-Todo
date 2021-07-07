import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className='todo-list'>
      <ul>
        {props.todos.map((todo, index) => {
          return <Todo key={todo.id} text={todo.text} />
        })}
      </ul>
    </div>
  )
}

export default TodoList