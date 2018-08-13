export const addTodo = value => ({
  type: 'ADD_TODO',
  value
})

export const toggleCompleted = id => ({
  type: 'TOGGLE_COMPLETED',
  id
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})