import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  REMOVE_COMPLETED_TODOS
} from './types';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const removeCompletedTodos = () => {
  return {
    type: REMOVE_COMPLETED_TODOS
  };
};
