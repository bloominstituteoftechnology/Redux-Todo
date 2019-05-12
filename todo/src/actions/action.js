export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE = "COMPLETE";
export const ADD_TODO = "ADD_TODO";
export const DELETE_ALL = "DELETE_ALL";

export const addTodo = todo => {
  return { type: "ADD_TODO", payload: todo };
};

export const deleteTodo = id => {
  return { type: "DELETE_TODO", payload: id };
};

export const completeTodo = id => {
  return { type: "COMPLETE", payload: id };
};

export const deleteAll = () => {
  return { type: "DELETE_ALL" };
};
