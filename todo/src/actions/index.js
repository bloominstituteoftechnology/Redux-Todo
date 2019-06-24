export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TOsDO';

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
