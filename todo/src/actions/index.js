export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";

export const todos = () => {
  return {
    type: GET_TODOS
  };
};

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};
