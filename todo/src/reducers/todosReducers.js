import {
  NEW_TODO,
  TOGGLE_COMPLETE // screaming snake case? convention for configurations
} from "../actions";

export default (todos = [], action) => {
  //receive action & check action type
  switch (action.type) {
    case NEW_TODO:
      return todos.push(action.payload);
    case TOGGLE_COMPLETE:
      const newTodos = todos.slice(0);
      newTodos[action.payload].completed = !newTodos[action.payload].completed; // be the opposite of what you are
      return newTodos;
    default:
      return todos;
  }
};
