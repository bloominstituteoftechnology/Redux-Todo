import { CREATE_TODO } from "../actions";

export const todo = (state = [], action)  => {
  switch (action.type) {
    case CREATE_TODO:
      return state.concat(action.payload);
    default:
      return state;
  }
}