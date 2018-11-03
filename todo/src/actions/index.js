export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (obj) => {
  return { type: ADD_TODO, payload: obj};
}

export const toggleTodo = (todo) => {
  return { type: TOGGLE_TODO, payload: todo};
}
