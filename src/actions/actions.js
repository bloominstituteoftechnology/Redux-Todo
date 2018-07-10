export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});
export const toggleComplete = id => ({
  type: TOGGLE_COMPLETE,
  payload: {
    id,
  },
});
export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
