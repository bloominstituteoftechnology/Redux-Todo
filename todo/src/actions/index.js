export const ADD_TODO = 'ADD_TODO'

export const addToDo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  }
}