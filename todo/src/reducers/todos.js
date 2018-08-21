import { NEW_TODO, TOGGLE_TODO, GET_TODO } from "../actions";

export default (todos = [], action) => {
  switch (action.type) {
    case NEW_TODO:
      return [...todos, action.payload];
    case TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });

    case GET_TODO:
      return action.payload;
    default:
      return todos;
  }
};
