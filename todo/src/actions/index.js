export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (text,id) => {
  return {
    type: ADD_TODO,
    text: text,
    id: id
  }
};
export const toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    payload: index,
  }
};
