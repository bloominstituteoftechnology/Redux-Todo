import React, { Fragment } from "react";
import Todo from "./Todo";

const TodosList = props => {
  console.log("TodosList props", props);
  return (
    <Fragment>
      {props.todos.map(todo => {
        // <Todo todoItem={todo} />;
        return <Todo key={todo} todo={todo} />;
      })}
    </Fragment>
  );
};

export default TodosList;
