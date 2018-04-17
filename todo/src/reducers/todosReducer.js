import { ADDTODO, REMOVETODO, CHECKTODO } from "../actions";

export default (todos = ["startingTodo"], action) => {
  switch (action.type) {
    case ADDTODO:
      return [...todos, action.payload];
    case REMOVETODO:
      return [...todos.filter(todo => todo !== action.payload)];
    case CHECKTODO:
      console.log("CHECKTODO");
      return;
    default:
      return todos;
  }
};
