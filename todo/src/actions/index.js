import { ADD_TODO, TOGGLE_COMPLETED } from "../reducers";

export const addToDo = value => {
  return {
    type: ADD_TODO,
    payload: value
  };
};

export const toggleCompleted = index => {
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
};
