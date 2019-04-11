export const ADD_TODO = "ADD_TODO";

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const TOGGLE_TODO = "TOGGLE_TODO";

export const toggleTodo = todo => {
  return {
    type: TOGGLE_TODO,
    payload: todo
  };
};
