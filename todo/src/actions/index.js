import { ADD, DELETE, TOGGLE_COMPLETED } from "../reducers";

export const addToDo = todo => {
  return {
    type: ADD,
    payload: todo
  };
};

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  };
};

export const deleteToDo = id => {
  return {
    type: DELETE,
    payload: id
  };
};
