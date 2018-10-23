export const ADD_TODO = 'ADD_TODO';
export const SELECT_TODO = 'SELECT_TODO';

export const addTodo = newTodo => {
  return {
    type: 'ADD_TODO',
    payload: newTodo
  };
};

export const selectTodo = index => {
  return {
    type: SELECT_TODO,
    payload: index
  };
};
