
import React from 'react';

const Todo = (props) => {
  return(
    <li
      style={{
        textDecoration:
          props.completed ?
            'line-through' :
            'none'
      }}
    >
      <span
        onClick={props.toggle}
        style={{marginRight: '10px'}}
      >
      {props.text}
      </span>
      <button onClick={props.remove}>Delete Todo</button>
    </li>
  );
}

export default Todo;