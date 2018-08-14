// empty array containing our state
export let todos = ["Bake Lasagana", "Flip the script!", "Bake A Cake"];

export const ADD_TO_TODOS_LIST = "ADD_TO_TODOS_LIST";
export const ADD_INITIAL_TODO_ITEMS = "ADD_INITIAL_TODO_ITEMS";

export const addToTodosList = () => {
  // Fill in this function
  return {
    type: ADD_TO_TODOS_LIST
    // payload: decrement
  };
};
