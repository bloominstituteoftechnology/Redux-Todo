import React from "react";
const Todo = props => {
  return (
    <div onClick = {() => props.complete()} className={`todo-${props.id}`}>
      <p>{props.text}</p>
    </div>
  );
};
export default Todo;
