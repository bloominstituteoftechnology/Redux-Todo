export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodo = (newTodo) => {
  return { type: ADD_TODO, payload: newTodo };
};

export const toggleComplete = (todo) => {
  return { type: TOGGLE_COMPLETE, payload: todo };
};
