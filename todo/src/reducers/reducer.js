import { FETCH_TODO } from "../actions/action";

const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case FETCH_TODO:
      return [...todos, ...action.payload];
    default:
      return todos;
  }
};

export default todoReducer;
