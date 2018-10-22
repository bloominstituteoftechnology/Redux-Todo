import React from 'react';

const TodoItem = props => {
  return (
    <div>
      <p>{props.todo.text}</p>
    </div>
  );
}

export default TodoItem;
