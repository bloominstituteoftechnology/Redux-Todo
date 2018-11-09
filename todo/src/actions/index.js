export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = () => {
  return {
    type: ADD_TODO
  };
};

export const toggleTodo = () => {
  return {
    type: TOGGLE_TODO
  };
};

export const deleteTodo = () => {
  return {
    type: DELETE_TODO
  };
};
