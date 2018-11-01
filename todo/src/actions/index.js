export const ADD_TODO = 'ADD_TODO';
export const TOGGLE = 'TOGGLE';

export const addTodo = () => {
  return { type: ADD_TODO }
};

export const toggleTodo = () => {
  return { type: TOGGLE }
};