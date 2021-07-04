export const ADD_TODO = 'ADD_TODO';

export const addTodo = (todoTask) => {
  return {
    type: ADD_TODO,
    payload: todoTask
  };
};