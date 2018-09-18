export const ADD_TODO = 'ADD_TODO'

export const addTodo = (newTodo) => ({
  type: 'ADD_TODO',
  payload: newTodo
})