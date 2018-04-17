import { ADDTODO, REMOVETODO, CHECKTODO } from "../actions";
import React from "react";

export default (todos = ["startingTodo"], action) => {
  switch (action.type) {
    case ADDTODO:
      return [action.payload, ...todos];
    case REMOVETODO:
      return [
        ...todos.filter(
          todo =>
            todo !== action.payload &&
            todo !== <strike>{action.payload}</strike>
        )
      ];
    case CHECKTODO:
      return [
        ...todos.filter(todo => todo !== action.payload),
        <strike>{action.payload}</strike>
      ];
    default:
      return todos;
  }
};
