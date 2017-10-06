import React from 'react'


const TodoItem = (props) => (
  <div>
    <li onClick={props.onClick}
        style={{
          textDecoration: props.completed ? 'line-through' : 'none'
        }}
    >
      <ul>
        <li>{props.description}</li>
        <li>{'completed: ' + props.completed}</li>
        <li>{'id: ' + props.id}</li>
      </ul>
    </li>
  </div>
);

export default TodoItem;