export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const GET_TODO = 'GET_TODO'

const addTodo = value => ({
  type: ADD_TODO,
  payload: { value, completed: false }
})

export { addTodo }
