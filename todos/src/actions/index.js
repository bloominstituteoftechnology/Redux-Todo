export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = todo => {
  console.log("ACTION payload:", todo);
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const toggleCompleted = index => {
  console.log("TOGGLE index:", index);
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
};

export const deleteTodo = index => {
  console.log("DELETE index:", index);
  return {
    type: DELETE_TODO,
    payload: index
  };
};
