export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

let todoId = 0;

export const addTodo = () => {
  return {
    type: ADD_TODO,
    payload: {
      id: todoId++,
      value: "",
      completed: false
    }
  };
};

export const toggleTodo = () => {
  return { type: TOGGLE_TODO };
};
