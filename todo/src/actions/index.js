export const ADD_TODO = 'ADD_TODO';
export const TOGGLE = 'TOGGLE';

export const addTodo = (id) => {
  return { type: ADD_TODO, payload: id }
};

export const toggleTodo = () => {
  return { type: TOGGLE }
};