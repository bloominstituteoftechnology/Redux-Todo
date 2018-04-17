export const NEW_TODO = 'NEW_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_TODO = 'GET_TODO';

const newTodo = value => ({
  type: NEW_TODO,
  payload: { value, completed: false }
});

export default { newTodo };