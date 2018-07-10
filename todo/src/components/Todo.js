import React from 'react';

const Todo = props => {
  return <div onClick={props.markDone}>{props.todo.value}</div>;
};

export default Todo;
