import uuid from 'uuid'

export const ADD = 'ADD'
export const TOGGLE = 'TOGGLE'
export const DELETE = 'DELETE'

export const addTodo = todo => ({
  type: ADD,
  todo: {
    id: uuid(),
    value: todo,
    completed: false
  }
})

export const toggleTodo = id => ({
  type: TOGGLE,
  id
})

export const deleteTodo = id => ({
  type: DELETE,
  id
})
