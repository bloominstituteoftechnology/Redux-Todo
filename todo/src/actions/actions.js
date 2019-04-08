export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const REMOVE_TODO = "REMOVE_TODO";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function toggleCompleted(index) {
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
}

export function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    payload: index
  };
}
