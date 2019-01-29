export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: {
      value: todo.value
    }
  };
};

export const toggleCompleted = value => {
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      value
    }
  };
};
