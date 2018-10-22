import React from 'react';

function Todos(props) {
  return (
    <div>
      <p>{props.todo.value}</p>
    </div>
  );
}

export default Todos;
