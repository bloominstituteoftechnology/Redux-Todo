export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export const addTodo = todoItem => {
  console.log(todoItem);
  return {
    type: ADD_TODO,
    payload: todoItem
  };
};

export const toggleCompleted = id => {
  console.log("toggle completed", id);
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  };
};
