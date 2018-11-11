export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

let nextTodoId = 0
export const addTodo = todo => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    todo
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
