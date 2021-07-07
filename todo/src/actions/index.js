export const ADD_TODO = 'ADD_TODO';
export const TOGGLE = 'TOGGLE';

export const addTodo = (todo) => {
  return { type: ADD_TODO, payload: todo }
};

export const toggleTodo = (id) => {
  return { type: TOGGLE, payload: id }
};