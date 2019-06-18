export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const FINISH_TODO = "FINISH_TODO";

export const addNewTodo = newTodo => {
  return {
    type: ADD_NEW_TODO,
    payload: newTodo
  };
};
