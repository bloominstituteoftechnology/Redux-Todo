export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = newTodo => {
  return {
    type: ADD_TODO,
    newTodo: newTodo
  };
};

export const deleteTodo = () => {
  return {
    type: DELETE_TODO
  };
};
