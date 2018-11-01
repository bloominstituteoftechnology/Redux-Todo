export const ADD_TODO = 'ADD_TODO';

export const addTodo = (obj) => {
  return { type: ADD_TODO, payload: obj};
}
