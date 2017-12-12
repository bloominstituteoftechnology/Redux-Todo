export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let id = 0;

export const addTodo = (text) => {
  return { 
    type: ADD_TODO,
    text: text,
    completed: false,
    id: id++
  }
};

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, id }
};

export const toggleTodo = (id) => {
  return {type : TOGGLE_TODO, id}
};