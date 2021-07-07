export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODOS = 'REMOVE_TODOS';
export const GET_TODOS = 'GET_TODOS';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
})
