import React from 'react';


function Todos(props) {
  if (!props.todo.completed) {
    return(
      <div style={ {display: 'flex'} } onClick={props.onClick}>
        <p>x  </p>
        <h4>{props.todo.text}</h4>
      </div>
    )
  } else {
    return(
      <div style={ {display: 'flex'} } onClick={props.onClick}>
        <p>x  </p>
        <p><strike>{props.todo.text} (task completed)</strike></p>
      </div>
    )
  }
}

export default Todos;