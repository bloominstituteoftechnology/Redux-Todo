import { ADD_TODO, UPDATE_COMPLETED, DELETE_ITEM } from "../actions";

export default (todos = [], action) => {
  console.log("Action: ", action);
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];
    case UPDATE_COMPLETED:
      return todos.map(todo => {
        return todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      });
    case DELETE_ITEM:
      return [
        ...todos.slice(0, action.payload.id),
        ...todos.slice(action.payload.id+1)
      ];
    default:
      return todos;
  }
};
