export const ADD_TODO = "ADD_TODO"

export const addTodo = todoText => {
  return { type: ADD_TODO, payload: todoText }
}
