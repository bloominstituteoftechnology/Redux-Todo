export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (text) => {
  console.log('inside add todo', text);
  return {
    type: ADD_TODO,
    payload: text
  }
}

export const toggleTodo = (index) => {
  console.log('inside toggle todo');
  return {
    type: TOGGLE_TODO,
    payload: index
  }
}