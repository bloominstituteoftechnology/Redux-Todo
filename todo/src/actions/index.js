export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// Actions to be sent to reducer function

// for new TodoItems
let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
