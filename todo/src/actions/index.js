export const ADD = "ADD";
export const COMPLETE = "COMPLETE";

export const addNewTodo = newTodo => ({
  type: TODO,
  payload: newTodo
});

export const completeTodo = completedTodo => ({
    type: COMPLETE,
    payload: completedTodo
});
