import React from 'react';

function Todos(props) {
  return(
    <div>
      <h4>{props.todo.value}</h4>
    </div>
  )
}

export default Todos;