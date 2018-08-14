import React, { Fragment } from "react";
import Todo from "./Todo";

const TodosList = props => {
  return (
    <Fragment>
      {props.todos.map(todo => {
        // <Todo todoItem={todo} />;
        return <Todo />;
      })}
    </Fragment>
  );
};

export default TodosList;
