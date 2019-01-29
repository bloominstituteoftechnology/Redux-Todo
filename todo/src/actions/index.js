export const ADD_TODO = "ADD_TODO"

export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}