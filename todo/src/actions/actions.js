export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_TODO = "ADD_TODO";

let todoID = 0;

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  }
}

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: {
      todo: text,
      complete: false,
      id: todoID++
    }
  }
}