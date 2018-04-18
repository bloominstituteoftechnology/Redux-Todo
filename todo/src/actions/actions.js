export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let nextID = 0;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextID++,
    text
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
}