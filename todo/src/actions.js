export const ADD_TODO = "ADD_TODO";

const addTodo = text => {
  let newTodo = {
    task: text,
    complete: false
  };
  return { type: ADD_TODO, payload: newTodo };
};
