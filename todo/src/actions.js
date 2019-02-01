export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    newTodo: { id: Date.now(), value: todo, completed: false } 
  }
}

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    id: todoId
  }
}