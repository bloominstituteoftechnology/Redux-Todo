export const ADD_TODO = "ADD_TODO";

export const MARK_DONE = "MARK_DONE";

export const addTodo = (todo, completed) => {
  return {
    type: ADD_TODO,
    payload: {
      todo,
      completed
    }
  };
};

export const markDone = (id) => {
  return {
    type: MARK_DONE,
    payload: {
      id
    }
  };
};

