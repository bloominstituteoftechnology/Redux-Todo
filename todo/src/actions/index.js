export const selectToDo = todo => {
  return {
    type: "TODO_SELECTED",
    payload: todo
  };
};
