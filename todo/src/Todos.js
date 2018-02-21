import React from 'react';

function Todos(props) {
  return(
    <div>
      {console.log('props within Todos.js', props.todo)}
      <h4>{props.todo.text}</h4>
    </div>
  )
}

export default Todos;