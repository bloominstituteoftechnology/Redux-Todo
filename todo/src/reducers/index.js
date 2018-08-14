import { ADD_TO_TODOS_LIST, ADD_INITIAL_TODO_ITEMS, todos } from "../actions";

export default (state = todos, action) => {
  console.log("ACTION", action);
  console.log("STATE", state);
  switch (action.type) {
    case ADD_TO_TODOS_LIST:
      return "hey";
    case ADD_INITIAL_TODO_ITEMS:
      return { todos: state };
    default:
      return { todos };
  }
};
