import React from "react";
const Todo = props => {
  return (
    <div className="todo">
      <li style={props.strike} onClick={props.click}>
        {props.todoItem}
      </li>
    </div>
  );
};
export default Todo;
