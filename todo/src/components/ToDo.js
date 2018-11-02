import React from 'react'
import '../App.css';

const ToDo = props => {
    return props.todos.map((item, id) => (
      <li
        onClick={() => props.toggleComplete(item.id)}
        key={id}
        id={id}
        style={{
          textDecoration: item.completed ? 'line-through' : 'none'
        }}
      >
        {item.task}
      </li>
    ));
  };
  
  export default ToDo;