import React from "react";
const TodoForm = props => {
  return (
    <div className="todo-form">
      <input
        onChange={props.inputHandler}
        type="text"
        value={props.value}
        placeholder="Enter task here"
      />
      <button onClick={props.submit}>Add Todo</button>
    </div>
  );
};
export default TodoForm;
