export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = () => {
  return {
    type: ADD_TODO,
    value: "",
    completed: false
  };
};

export const toggleTodo = () => {
  return { type: TOGGLE_TODO, completed: null };
};
