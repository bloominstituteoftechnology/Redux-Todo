export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = todo => {
  return {
    // returns an action (object with a type, and maybe a payload)
    type: ADD_TODO,
    payload: {
      value: todo,
      completed: false
    }
  };
};

export const toggleTodo = index => {
  return {
    // returns an action (object with a type, and maybe a payload)
    type: TOGGLE_TODO,
    payload: index
  };
};
