export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";

export const addTodo = () => ({
  type: ADD_TODO,
  payload: addTodo
});

export const toggleComplete = () => ({
  type: TOGGLE_COMPLETE,
  payload: toggleComplete
});

export const removeCompleted = () => ({
  type: REMOVE_COMPLETED,
  payload: removeCompleted
});
