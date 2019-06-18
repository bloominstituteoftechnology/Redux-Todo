export const ADD_TODO = "ADD_TODO";
export const TOGGLE_STATUS = "TOGGLE_STATUS";

export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
export const toggleTodoStatus = id => ({ type: TOGGLE_STATUS, payload: id });