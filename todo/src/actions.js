export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = text => {
  let newTodo = {
    task: text,
    complete: false
  };
  return { type: ADD_TODO, payload: newTodo };
};
export const deleteTodo = id => {
  return { type: DELETE_TODO, payload: id };
};
