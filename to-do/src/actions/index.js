export const ADD_TODO = "ADD_TODO";

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: {
      value: todo,
      completed: false
    }
  };
};
