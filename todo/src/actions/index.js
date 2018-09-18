
export const ADD_TODO = 'ADD_TODO';
export const TOOGLE_COMPLETED = 'TOOGLE_COMPLETED';

export const addTodo = todo => {
  return {
  type: ADD_TODO,
  payload: todo,
}}

export const toggleCompleted = id => {
  return {
    type: TOOGLE_COMPLETED,
    payload: id
  }
}