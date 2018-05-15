import { FETCH_TODOS } from "../actions";

export const todoReducer = (state = [], action) => {
  if (action.type === FETCH_TODOS) {
    return state.concat(action.payload);
  }
  return state;
};