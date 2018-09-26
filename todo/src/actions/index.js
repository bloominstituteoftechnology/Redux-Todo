export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodo = todo => {
  return { type: ADD_TODO, payload: todo };
};

export const completeTodo = index => {
  return { type: COMPLETE_TODO, payload: index };
};