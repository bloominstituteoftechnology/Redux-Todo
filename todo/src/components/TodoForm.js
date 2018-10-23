import React from "react";

const TodoForm = props => (
  <form onSubmit={props.handleNewToDo}>
    <input
      type="text"
      placeholder="...todo"
      value={props.inputText}
      name="inputText"
      onChange={props.handleInputChange}
    />
    <div className="buttons">
      <button className="add" type="submit" onClick={props.handleNewTodo}>
        Add
      </button>
      <button className="clear" onClick={props.removeCompleted}>
        Clear
      </button>
    </div>
  </form>
);

export default TodoForm;
