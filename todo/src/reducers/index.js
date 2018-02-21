import { ADD, COMPLETE } from "../actions";

export default (todo = [], action) => {
  switch (action.type) {
    case ADD:
      return todo.concat(action.payload);
    case COMPLETE:
      return todo.slice(0, todo.length - 2);
    default:
      return todo;
  }
};
