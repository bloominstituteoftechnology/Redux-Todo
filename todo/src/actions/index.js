export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

//referred to redux todo example
let todoId = 0;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: {
      value: text,
      completed: false,
      id: ++todoId
    }
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const deleteTodo = () => {
  return {
    type: DELETE_TODO
  };
};
