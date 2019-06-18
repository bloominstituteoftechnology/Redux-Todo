export const ADD_TODO = "ADD_TODO";
export const TOGGLE_STATUS = "TOGGLE_STATUS";

export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
export const toggleTodo = todo => ({ type: TOGGLE_STATUS, payload: todo });