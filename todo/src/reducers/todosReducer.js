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
      return todos.map(todo => {
        if (todo === action.payload) {
          return <strike>{todo}</strike>;
        }
        return todo;
      });
    default:
      return todos;
  }
};
