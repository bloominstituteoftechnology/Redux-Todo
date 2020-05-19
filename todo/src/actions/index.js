import {
  ADD_TODO,
  TOGGLE_COMPLETE,
  REMOVE_COMPLETED,
  DELETE_TODO
} from "../reducers";

export const addTodo = text => ({
  type: ADD_TODO,
  payload: text
});

export const toggleComplete = id => ({
  type: TOGGLE_COMPLETE,
  payload: id
});

export const removeCompleted = arr => ({
  type: REMOVE_COMPLETED,
  payload: arr
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
});
