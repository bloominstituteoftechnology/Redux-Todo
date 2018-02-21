import { ADD_TODO, UPDATE_COMPLETED } from "../actions";

export default (todos = [], action) => {
  console.log("Action: ", action);
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];
    case UPDATE_COMPLETED:
      return todos.map(todo => {
        return todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      });
    default:
      return todos;
  }
};
