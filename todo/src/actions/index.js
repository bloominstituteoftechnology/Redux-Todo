export const NEW_TODO = "NEW_TODO";

export function newTodo(newItem) {
  return {
    type: NEW_TODO,
    payload: newItem
  };
}
