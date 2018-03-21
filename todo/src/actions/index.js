export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

let nextTodoId = 0;
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text: text
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id: id
});
