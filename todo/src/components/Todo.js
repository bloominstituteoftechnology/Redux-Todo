import React from 'react';

/*
 * Display individual todo item
 * Takes in props:
 * -- id: 0
 * -- value: ""
 * -- completed: bool
 */
const Todo = (props) => {
  const cName = props.completed === true ? "todo-done" : "todo-active";

  return (
    <div id={props.id} className={cName}>{props.value}</div>
  );
};

export default Todo;