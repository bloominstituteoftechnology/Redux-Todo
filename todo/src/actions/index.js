export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const INPUT_HANDLER = "INPUT_HANDLER";
export const CLEAR_INPUT = "CLEAR_INPUT";

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: [
      {
        id: Date.now(),
        value: text,
        completed: false
      }
    ]
  };
}

export function inputHandler(event) {
  return {
    type: INPUT_HANDLER,
    inputText: event.target.value
  };
}

export function clearInput() {
  return {
    type: CLEAR_INPUT,
    inputText: ""
  }
}

export function toggleCompleted(newArray) {
  console.log(newArray)
  return {
    type: TOGGLE_COMPLETED,
    payload: newArray
  }
}
