import { ADD_TODO, TOGGLE_TODO } from '../reducers';

// action creator
// it creates an action - a plain JS object with
// type and payload property


export const addTodo = todo => {

  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    payload: index
  };
};