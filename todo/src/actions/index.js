export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = text => {
  console.log(text);
  return {
    type: ADD_TODO,
    text
  };
};

export const toggleTodo = id => {
  console.log(id);
  return {
    type: TOGGLE_TODO,
    id
  };
};
