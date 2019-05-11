export const ADD_TODO = "ADD_TODO";

export const addTodo = todo => {
  console.log("IN ACTION", todo);
  return {
    type: ADD_TODO,
    payload: todo
  };
};
