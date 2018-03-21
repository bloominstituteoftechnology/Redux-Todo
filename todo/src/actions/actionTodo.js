export const ADD = 'ADD';

export const addItem = (newTodo) => {
  return {
    type: ADD,
    newTodo: newTodo
  }
};