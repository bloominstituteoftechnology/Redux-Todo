export const NEW_TODO = "NEW_TODO";

export function newTodo(newItem) {
  console.log("Action.js:", newItem);
  return {
    type: NEW_TODO,
    payload: newItem
  };
}
