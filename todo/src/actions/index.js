export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";

export const addTodo = todo => ({
  type: ADD_TODO,
  id: todo.id,
  value: todo.value
});

export const toggleComplete = todo => ({
  type: TOGGLE_COMPLETE,
  id: todo.id
});

export const removeCompleted = todo => ({
  type: REMOVE_COMPLETED,
  id: todo.id
});
