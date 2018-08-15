import React, { Fragment } from "react";

import Todo from "./Todo";

const TodosList = props => {
  console.log("TodosList props", props.todos.todos[0].completed);
  return (
    <Fragment>
      {props.todos.todos.map(todo => (
        <Todo
          todo={todo}
          key={todo.id}
          toggleCompletedStyle={props.toggleCompletedStyle}
        />
      ))}
    </Fragment>
  );
};

export default TodosList;
