import { FETCH_TODO, TOGGLE_COMPLETE, DELETE_TODO } from "../actions/action";

const todoReducer = (todos = [], action) => {
  console.log("hello");
  console.log(todos, "td");
  console.log(action, "action");
  switch (action.type) {
    case FETCH_TODO:
      return [...todos, action.payload];
    case TOGGLE_COMPLETE:
      todos[action.payload].complete === false
        ? (todos[action.payload].complete = true)
        : (todos[action.payload].complete = false);
      return [...todos];
    case DELETE_TODO:
      return todos.filter(items => !items.complete);
    default:
      return todos;
  }
};

export default todoReducer;
