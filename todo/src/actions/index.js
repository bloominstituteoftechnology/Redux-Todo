export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const INPUT_HANDLER = "INPUT_HANDLER";

export function addTodo(text) {
  console.log(text);
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
