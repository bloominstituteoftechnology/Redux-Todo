export const ADD = "ADD";
export const COMPLETE = "COMPLETE";

export const addNewTodo = newTodo => ({
  type: ADD,
  payload: newTodo
});

export const completeTodo = id => ({
  type: COMPLETE,
  payload: id
});
