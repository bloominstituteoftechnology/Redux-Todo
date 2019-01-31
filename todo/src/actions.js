export const ADD_TODO = "ADD_TODO";
export const STRIKE_TODO = "STRIKE_TODO";

export const addTodo = text => {
  let newTodo = {
    task: text,
    complete: false
  };
  return { type: ADD_TODO, payload: newTodo };
};
export const strikeTodo = id => {
  return { type: STRIKE_TODO, payload: id };
};
