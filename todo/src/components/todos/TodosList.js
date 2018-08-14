import React, { Fragment } from "react";
import Todo from "./Todo";

const TodosList = props => {
  console.log("TodosList props", props);
  return (
    <Fragment>
      {props.todos.todos.map(todo => (
        <Todo key={todo} todo={todo} />
      ))}
    </Fragment>
  );
};

export default TodosList;
