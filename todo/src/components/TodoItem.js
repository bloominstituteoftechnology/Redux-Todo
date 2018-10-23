import React from 'react';

const TodoItem = props => {
  return (
    <div>
      <p onClick={(e) => props.toggleComplete(e, props.todo.id)}>{props.todo.value}</p>
    </div>
  );
}

export default TodoItem;
