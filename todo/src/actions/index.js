export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const INPUT_HANDLER = "INPUT_HANDLER";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      value: text,
      completed: false
    }
  };
};

export const toggleCompleted = todoArr => {
  return {
    type: TOGGLE_COMPLETED,
    payload: todoArr
  };
};

export const inputHandler = event => {
  return {
    type: INPUT_HANDLER,
    inputText: event.target.value
  };
};
