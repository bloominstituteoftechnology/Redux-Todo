import React from 'react';

function Todo(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return <li>{todo.value}</li>;
      })}
    </div>
  );
}

export default Todo;
