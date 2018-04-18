export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = todo => ({
  type: 'ADD_TODO',
  payload: text
});

export const completeTodo = () => {
  console.log('calledComplete');
  return {};
}