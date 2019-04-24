import { ADD_TODO, TOGGLE_COMPLETED } from "../reducers/index";

export const addTodo = value => {
  console.log(value);
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

export default addTodo;