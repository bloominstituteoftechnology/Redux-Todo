export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

let todoId = 0

export const addTodoAction = text => {
  return {
    type: ADD_TODO,
    id: todoId++,
    text: text
  }
}

