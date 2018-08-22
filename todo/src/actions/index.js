export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = newTodo => {
    console.log("here we go", newTodo)
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};

export const deleteTodo = () => {
  return {
    type: DELETE_TODO
  };
};
