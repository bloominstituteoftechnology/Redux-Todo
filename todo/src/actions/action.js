export const ADD_TODO = "ADD_TODO";
export const COMPLETED = "COMPLETED";
export const DELETE_COMPLETED = "DELETE_COMPLETED";
export const CLEAR_ALL = "CLEAR_ALL";

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: {
      task: todo
    }
  };
};

export const completeTodo = id => {
  return {
    type: COMPLETED,
    payload: id
  };
};

export const deleteCompleted = id => {
  return {
    type: DELETE_COMPLETED,
    payload: id
  };
};

export const clearAll = () => {
  return {
    type: CLEAR_ALL
  };
};
