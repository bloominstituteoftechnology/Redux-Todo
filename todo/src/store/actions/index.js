export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

export const addTodo = todoText => {
  return { type: ADD_TODO, payload: todoText }
}

export const toggleTodo = todoId => {
  return { type: TOGGLE_TODO, id: todoId }
}
