export const addNewTodo = newTodo => {
  return {
    type: "ADD_NEW_TODO",
    payload: newTodo
  };
};
