export const NEW_TODO = "NEW_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export function newTodo(newItem) {
  //   console.log("Action.js:", newItem);
  return {
    type: NEW_TODO,
    payload: newItem
  };
}

//toggle todo complete
export function toggleComplete(index) {
  return {
    type: TOGGLE_COMPLETE,
    payload: index
  };
}
