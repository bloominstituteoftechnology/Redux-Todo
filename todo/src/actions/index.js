export const ADD = 'ADD'
export const TOGGLE = 'TOGGLE'
export const DELETE = 'DELETE'

export const addTodo = todo => ({
  type: ADD,
  todo
})

export const toggleTodo = todo => ({
  type: TOGGLE,
  todo
})

export const deleteTodo = todo => ({
  type: DELETE,
  todo
})