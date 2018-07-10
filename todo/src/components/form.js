import React from "react";

const TodoForm = props => {
  console.log("props", props);
  return (
    <div>
      <input
        type="text"
        onChange={props.eventHandler}
        placeholder="Add todo"
        value={props.value}
      />

      <button onClick={props.addTaskEvent}> Add Task </button>
    </div>
  );
};

export default TodoForm;
