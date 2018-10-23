export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = task => {
  return {
    type: ADD_TODO,
    payload: task
  };
};

export const toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    payload: index
  };
};
