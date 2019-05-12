export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const REMOVE_COMPLETED = "REMOVE_COMPLETED"

export const addTodo = todoText => {
  return { type: ADD_TODO, payload: todoText }
}

export const toggleTodo = todoId => {
  return { type: TOGGLE_TODO, id: todoId }
}

export const deleteTodo = todoId => {
  return { type: DELETE_TODO, id: todoId }
}

export const removeCompleted = () => {
  return { type: REMOVE_COMPLETED }
}
