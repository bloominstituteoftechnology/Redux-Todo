import React from 'react';

export default (props) => {
  return (
    <ul>
      {
        props.todos.map(todo => <li key={todo.value}>{todo.value}</li>)
      }
    </ul>
  );
}
