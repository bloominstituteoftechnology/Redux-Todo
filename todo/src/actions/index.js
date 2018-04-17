export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// for new TodoItems
let nextTodoId = 0;

const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
