// constants
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';

// actions creators
export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
})

export const updateTodo = (updatedTodo, id) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    todo: updatedTodo,
  },
})

export const toggleStatus = (id) => ({
  type: TOGGLE_STATUS,
  payload: id,
})