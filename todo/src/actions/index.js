export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const HANDLE_INPUT = "HANDLE_INPUT";
export const DELETE_COMPLETED = "DELETE_COMPLETED"; 


export const handleInput = (text) => {
  return {
    type: HANDLE_INPUT,
    payload: text
  }
};

export const addTodo = () => {
  return {
    type: ADD_TODO,
  }
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  }
};

export const deleteCompleted = () => {
  return {
    type: DELETE_COMPLETED,
  }
};
