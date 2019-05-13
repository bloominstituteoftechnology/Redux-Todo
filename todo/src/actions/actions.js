export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODOS = 'DELETE_TODOS';

export function addTodo(text){
  let newTodo = {
    name: text,
    completed: false
  };
  return { type: ADD_TODO, payload: newTodo };
}

export function deleteTodo(name){
  return {
    type: DELETE_TODO,
    name
  }
}

export function toggleTodo(name){
  return {
    type: TOGGLE_TODO,
    name
  }
}

export function deleteTodos() {
  return { type: DELETE_TODOS}
}
