export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const GET_TODO = 'GET_TODO'

const addTodo = value => ({
  type: ADD_TODO,
  // completed can be here or in reducers, let's find out later
  payload: { value, completed: false }
})

const removeTodo = value => ({
  type: REMOVE_TODO,
  payload: { value, completed: true }
})

export { addTodo, removeTodo }
