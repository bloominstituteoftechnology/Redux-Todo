export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const HANDLE_INPUT = "HANDLE_INPUT";



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
export const toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    payload: index,
  }
};
