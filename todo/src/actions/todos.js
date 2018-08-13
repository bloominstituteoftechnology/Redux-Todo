export const ADD_TODO = 'ADD_TODO';

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  }
}
