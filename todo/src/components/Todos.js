import React from "react";

const Todos = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <div className="todo">{todo.value}</div>
      ))}

      <form>
        <input type="text" placeholder="Add todo" />
        <button onClick>Add!</button>
      </form>
    </div>
  );
};

export default Todos;
