import React from 'react';

const Todo = ({text, completed, toggle, remove}) => {
  return(
    <li
      style={{
        textDecoration:
          completed ?
            'line-through' :
            'none'
      }}
    >
      <span
        onClick={toggle}
        style={{marginRight: '10px'}}
      >
      {text}
      </span>
      <button onClick={remove}>Delete Todo</button>
    </li>
  );
}

export default Todo;
