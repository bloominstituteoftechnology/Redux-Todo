export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
let nextTodoId = 0;

export const addTodo = (todoText) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    todoText,
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  }
}