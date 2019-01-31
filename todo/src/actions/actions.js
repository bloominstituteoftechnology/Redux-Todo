export const ADD_TODO = 'ADD_TODO';
export const COMPLETED = 'COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};

export const completed = (id) => {
  return {
    type: COMPLETED,
    payload: id
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};
