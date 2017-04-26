export const addTodo = (value) => ({
  type: 'ADD_TODO',
  value
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id
});