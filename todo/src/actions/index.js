// empty array containing our state
export let todos = [];

export const ADD_TO_TODOS_LIST = "ADD_TO_TODOS_LIST";

export const addToTodosList = () => {
  // Fill in this function
  return {
    type: ADD_TO_TODOS_LIST
    // payload: decrement
  };
};
