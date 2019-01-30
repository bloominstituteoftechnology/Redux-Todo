export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"

export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    payload: index,
  }
}

export function clearCompleted(todos) {
  return {
    type: CLEAR_COMPLETED,
    payload: todos
  }
}


