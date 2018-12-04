import { ADD_TODO, TOGGLE_COMPLETE, CLEAR_TODO } from '../reducers';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const toggleComplete = index => {
  return {
    type: TOGGLE_COMPLETE,
    payload: index
  }
}

export const clearTodo = () => {
  return {
    type: CLEAR_TODO
  }
}