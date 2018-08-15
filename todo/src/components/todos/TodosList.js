import React, { Fragment } from "react";

import Todo from "./Todo";

const TodosList = props => {
  console.log("TodosList props", props.todos);
  return (
    <Fragment>
      {props.todos.todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </Fragment>
  );
};

export default TodosList;
